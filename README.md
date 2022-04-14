# GoJS-Alongside-Blazor


This sample project shows how to integrate [GoJS](https://gojs.net) in a [Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor) project.

The project contains `GoJSBlazor.sln` for Visual Studio and a `launch.json` for VS Code.

GoJS is used in `Index.razor.cs`, with the Diagram div in `Index.razor`. GoJS is initialized from the Blazor lifecycle method `OnAfterRender`. All GoJS JavaScript code is stored in the `wwwroot/js` folder, in `gojs-scripts.js`.

There are two buttons on `Index.razor` that demonstrate saving and loading the diagram, via JS Interop.

## GoDiagram

This project uses GoJS, and all GoJS code must be written in JavaScript or TypeScript. If you wish to only author diagrams in C#, and to use static images in your Blazor app, it is possible to use [GoDiagram](https://godiagram.com/?gojsalongsideblazor) instead. [GoDiagram](https://godiagram.com/?gojsalongsideblazor) is a C# library based on the GoJS API for WinForms and headless C# environments.

## Support

Northwoods Software offers a month of free developer-to-developer support for GoJS to help you get started on your project.

Read and search the official <a href="https://forum.nwoods.com/c/gojs">GoJS forum</a> for any topics related to your questions.

Posting in the forum is the fastest and most effective way of obtaining support for any GoJS related inquiries.
Please register for support at Northwoods Software's <a href="https://www.nwoods.com/products/register.html">registration form</a> before posting in the forum.

For any nontechnical questions about GoJS, such as about sales or licensing,
please visit Northwoods Software's <a href="https://www.nwoods.com/contact.html">contact form</a>.


## License

The GoJS <a href="https://gojs.net/latest/doc/license.html">software license</a>.

Copyright (c) Northwoods Software Corporation
