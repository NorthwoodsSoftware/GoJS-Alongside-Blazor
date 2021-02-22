using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;

namespace GoJSBlazor.Pages
{
  public partial class GoJSMinimal : ComponentBase
  {
    [Inject] IJSRuntime JSRuntime { get; set; }

    protected async override void OnAfterRender(bool firstRender)
    {
      if (firstRender)
      {
        // This calls the script in gojs-scripts.js
        await JSRuntime.InvokeAsync<string>("initGoJS");
      }
    }

    protected async void Save()
    {
      await JSRuntime.InvokeAsync<string>("saveDiagram");
    }

    protected async void Load()
    {
      await JSRuntime.InvokeAsync<string>("loadDiagram");
    }

  }
}
