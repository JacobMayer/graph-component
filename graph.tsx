import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { Graph } from '../../components/graph-component/graph';

export default makeScene2D(function* (view) {
const graph = new Graph({
  nodes: [
    // Input Layer
    [100, 100],  // Node 0
    [100, 200], // Node 1
    [100, 300], // Node 2
    [100, 400], // Node 3
    [100, 500], // Node 4

    // Hidden Layer
    [300, 100],  // Node 5
    [300, 200], // Node 6
    [300, 300], // Node 7
    [300, 400], // Node 8
    [300, 500], // Node 9
],
      connections: [
        [0, 5], // Node 0 -> Node 5
        [0, 6], // Node 0 -> Node 6
        [0, 7], // Node 0 -> Node 7
        [0, 8], // Node 0 -> Node 8
        [0, 9], // Node 0 -> Node 9

        [1, 5], // Node 1 -> Node 5
        [1, 6], // Node 1 -> Node 6
        [1, 7], // Node 1 -> Node 7
        [1, 8], // Node 1 -> Node 8
        [1, 9], // Node 1 -> Node 9

        [2, 5], // Node 2 -> Node 5
        [2, 6], // Node 2 -> Node 6
        [2, 7], // Node 2 -> Node 7
        [2, 8], // Node 2 -> Node 8
        [2, 9], // Node 2 -> Node 9

        [3, 5], // Node 3 -> Node 5
        [3, 6], // Node 3 -> Node 6
        [3, 7], // Node 3 -> Node 7
        [3, 8], // Node 3 -> Node 8
        [3, 9], // Node 3 -> Node 9

        [4, 5], // Node 4 -> Node 5
        [4, 6], // Node 4 -> Node 6
        [4, 7], // Node 4 -> Node 7
        [4, 8], // Node 4 -> Node 8
        [4, 9], // Node 4 -> Node 9
]
        });
view.add(graph);

// Highlight node 0 with color 'yellow' for 1 second
yield* graph.highlightNode(0, "yellow", 1);
        // Highlight connection 1 with color 'red' for 1 second
yield* graph.highlightConnection(1, "red", 1);
        
view.add(graph);
// move node 1 and connections follow, to position 300, 0 over 3 seconds
yield* graph.moveNode(1, [0, 200], 0.5);
// Highlight connection 1 with color 'red' for 1 second
yield* graph.highlightConnection(1 , "red", 0.5);
// Highlight connection 18 with color 'red' for 1 second
yield* graph.highlightConnection(18 , "red", 0.5);
// Highlight node 0 with color 'yellow' for 1 second
yield* graph.highlightNode(0, "purple", 1);
// Change the size of node 2 to 128 for 1 second
//yield* graph.changeNodeSize(2, 128, 1);
});
