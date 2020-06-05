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
                await JSRuntime.InvokeAsync<string>("init");
            }
        }

        protected async void SaveDiagram()
        {
            await JSRuntime.InvokeAsync<string>("saveDiagram");
        }

        protected async void LoadDiagram()
        {
            await JSRuntime.InvokeAsync<string>("loadDiagram");
        }

    }
}
