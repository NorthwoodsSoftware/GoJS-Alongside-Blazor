// This would be called by a razor page that contains myDiagramDiv via an
// JSRuntime.InvokeAsync<string>("initGoJS");
// In this project, Index.razor calls it from within OnAfterRender in Index.razor.cs
function initGoJS() {
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    myDiagram = $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
        {
            "undoManager.isEnabled": true  // enable undo & redo
        });

    // define a simple Node template
    myDiagram.nodeTemplate =
        $(go.Node, "Auto",  // the Shape will go around the TextBlock
            new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
            $(go.Shape, "RoundedRectangle", { strokeWidth: 0, fill: "white" },
                // Shape.fill is bound to Node.data.color
                new go.Binding("fill", "color")),
            $(go.TextBlock,
                { margin: 8, font: "bold 14px sans-serif", stroke: '#333' }, // Specify a margin to add some room around the text
                // TextBlock.text is bound to Node.data.key
                new go.Binding("text", "key"))
        );

    // but use the default Link template, by not setting Diagram.linkTemplate

    // create the model data that will be represented by Nodes and Links
    myDiagram.model = new go.GraphLinksModel(
        [
            { key: "Alpha", color: "lightblue" },
            { key: "Beta", color: "orange" },
            { key: "Gamma", color: "lightgreen" },
            { key: "Delta", color: "pink" }
        ],
        [
            { from: "Alpha", to: "Beta" },
            { from: "Alpha", to: "Gamma" },
            { from: "Beta", to: "Beta" },
            { from: "Gamma", to: "Delta" },
            { from: "Delta", to: "Alpha" }
        ]);
}

function saveDiagram() {
    document.getElementById("mySavedModel").value = myDiagram.model.toJson();
}

function loadDiagram() {
    myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
}