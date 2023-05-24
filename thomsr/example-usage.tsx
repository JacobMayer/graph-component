import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { Graph } from '../../components/thomsr/graph';
import { GraphNode } from "../../components/thomsr/graph-node";
import { GraphConnection } from "../../components/thomsr/graph-connection";
import { createRef } from "@motion-canvas/core/lib/utils/createRef";

export default makeScene2D(function* (view) {
        const graph = createRef<Graph>();
      
        view.add(
          <Graph
            ref={graph}
            connections={[
              [4,5,6],
              [5,7],
              [4,3,2,1,0],
              [2,0],
              [2, 5]
            ]}
            position={[-1920 / 2, -1080 / 2]}
            fadeInStartNode={4}
           >
            <GraphNode position={[346, 272]} />
            <GraphNode position={[805, 272]} text={"3"} />
            <GraphNode position={[576, 539]} />
            <GraphNode position={[370, 808]} />
            <GraphNode position={[829, 808]} text={"2"} />
            <GraphNode position={[1054, 539]} />
            <GraphNode position={[1217, 359]} />
            <GraphNode position={[1446, 539]} text={"7"} />
          </Graph>
        );
      
        yield* graph().fadeIn();
        yield* graph().change(0);        
        yield* waitFor(1); 
      });
