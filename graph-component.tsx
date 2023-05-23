import {
    Circle,
    Line,
    Shape,
    ShapeProps,
  } from "@motion-canvas/2d/lib/components";
  import { initial, signal } from "@motion-canvas/2d/lib/decorators";
  import { SignalValue, SimpleSignal } from "@motion-canvas/core/lib/signals";
  import { PossibleVector2, Vector2 } from "@motion-canvas/core/lib/types";
  import { makeRef } from "@motion-canvas/core/lib/utils";
  import { all, waitFor } from "@motion-canvas/core/lib/flow";
  
  export interface GraphProps extends ShapeProps {
    nodes?: SignalValue<SignalValue<PossibleVector2>[]>;
    connections?: SignalValue<number[][]>;
    nodeSize?: SignalValue<number>;
    outlineColor?: string;
    outlineWidth?: number;
  }
  
  export class Graph extends Shape {
    *fadeIn(): import("@motion-canvas/core/lib/threading").ThreadGenerator {
      throw new Error("Method not implemented.");
    }
    @initial(null)
    @signal()
    public declare readonly nodes: SimpleSignal<
      SignalValue<PossibleVector2>[] | null,
      this
    >;
  
    @initial(null)
    @signal()
    public declare readonly connections: SimpleSignal<number[][], this>;
  
    @initial(64)
    @signal()
    public declare readonly nodeSize: SimpleSignal<number, this>;
  
    private nodeRefs: Circle[] = [];
    private connectionRefs: Line[] = [];
  
    private updateConnections() {
      this.connections().forEach((lineValues, index) => {
        if (lineValues.length > 1) {
          const points = lineValues.map((pos) => this.nodeRefs[pos].position());
          this.connectionRefs[index].points(points);
        }
      });
    }
    // private createBinaryTree() {
    //     // First, add nodes
    //     this.nodes().forEach((pos, index) => {
    //       const nodeRef = makeRef(this.nodeRefs, index);
    //       this.add(
    //         <Circle
    //           ref={nodeRef}
    //           size={this.nodeSize}
    //           stroke={8}
    //           fill={"white"}
    //           lineWidth={2}
    //           position={pos}
    //           zIndex={100}
    //         />
    //       );
    //     });
    
    //     // Then, add connections
    //     this.connections().forEach((lineValues) => {
    //       if (lineValues.length > 1) {
    //         this.add(
    //           <Line
    //             ref={makeRef(this.connectionRefs, this.connectionRefs.length)}
    //             points={lineValues.map((pos) => this.nodeRefs[pos].position())}
    //             lineWidth={10}
    //             stroke={"white"}
    //           />
    //         );
    //       }
    //     });
    //   }

      public constructor(props?: GraphProps) {
        super(props);
        // this.createBinaryTree();
      }
      
    public *highlightNode(nodeIndex: number, color: string, duration: number) {
      yield *this.nodeRefs[nodeIndex].fill(color, duration);
    }
  
    public *highlightConnection(
      connectionIndex: number, 
      color: string,
      duration: number
    ) {
      yield *this.connectionRefs[connectionIndex].stroke(color, duration);
    }
  
    public *changeNodeSize(nodeIndex: number, newSize: number, duration: number) {
      const originalNode = this.nodeRefs[nodeIndex];
      yield *all(
        originalNode.size.x(newSize, duration).to(newSize, duration),
        originalNode.size.y(newSize, duration).to(newSize, duration)
      );
    }
  
    public *moveNode(
      nodeIndex: number,
      newPos: PossibleVector2,
      duration: number,
      steps: number = 1000
    ): Generator<any, void, unknown> {
      if (nodeIndex < 0 || nodeIndex >= this.nodeRefs.length) {
        throw new Error(`Invalid nodeIndex: ${nodeIndex}`);
      }
      const originalNode = this.nodeRefs[nodeIndex];
      
        if (Array.isArray(newPos)) {
          const startPosition = originalNode.position();
          const endPosition = new Vector2(newPos[0], newPos[1]);
          
          const dx = (endPosition.x - startPosition.x) / steps;
          const dy = (endPosition.y - startPosition.y) / steps;
          
          for (let i = 0; i < steps; i++) {
            const newPosition = new Vector2(startPosition.x + dx * i, startPosition.y + dy * i);
            yield* originalNode.position(newPosition, duration / steps);
            this.updateConnections();
          }
          yield* originalNode.position(endPosition, duration / steps);
          this.updateConnections();
        }
      }   
  }
