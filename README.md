# Example Usage

## Moving Nodes:
Move node 1 and connections follow, to position 300, 0 over 3 seconds
```yield* graph.moveNode(1, [300, 0], 3);```
## Changing Node Size:
Change the size of node 2 to 128 over 1 second
```yield* graph.changeNodeSize(2, 128, 1);```
## Node Highlighting:
Highlight node 0 with color 'yellow' over 1 second
```yield* graph.highlightNode(0, "yellow", 1);```

## Connection Highlighting:
Highlight connection 1 with color 'red' over 1 second
```yield* graph.highlightConnection(1, "red", 1);```

# Graph Examples:
# Simple Neural Network
of 10 nodes with one input layer and one hidden layer:
```
nodes: [
    // Input Layer
    [100, 50],  // Node 0
    [100, 150], // Node 1
    [100, 250], // Node 2
    [100, 350], // Node 3
    [100, 450], // Node 4

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
```
# Binary Tree:
```
nodes: [
        [200, 50], // Root node
        [100, 150], // Left child of root
        [300, 150], // Right child of root
        [50, 250], // Left child of left child
        [150, 250], // Right child of left child
        [250, 250], // Left child of right child
        [350, 250], // Right child of right child
      ],
      connections: [
        [0, 1], // Root -> Left child
        [0, 2], // Root -> Right child
        [1, 3], // Left child -> Left child's left child
        [1, 4], // Left child -> Left child's right child
        [2, 5], // Right child -> Right child's left child
        [2, 6], // Right child -> Right child's right child
      ]
```
