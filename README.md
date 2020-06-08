# GoJS-Alongside-Blazor

<p>This sample project shows how one might use GoJS in a <a href="https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor">Blazor</a> project. To see it live, download the repo and load <code>GoJSBlazor.sln</code> into Visual Studio, then click "Run."
<p>All GoJS JavaScript code is stored in the <code>wwwroot/js</code> folder, in <code>gojs-scripts</code>. Then, functions from that file are called in <code>Index.razor.cs</code>, using Blazor's <a href="https://docs.microsoft.com/en-us/aspnet/core/blazor/call-javascript-from-dotnet?view=aspnetcore-3.1">JSInterop</a>.</p>
<p>In this project specifically, a JavaScript initialization function that setups up some GoJS Node and Link templates and data is called on the Blazor lifecycle hook <code>OnAfterRender</code>.</p>
<p>There are also two buttons that, whose <code>onclick</code> functions use JSInterop to call save and load JavaScript functions, that save or load the GoJS Diagram's model data. Press "Save", then delete some Nodes or Links, then press "Load" to see these functions in action.</p>
