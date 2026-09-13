// Function to show a side pane
function showSidePane() {

    // Create the side pane with icon, title, width, etc.
    Xrm.App.sidePanes.createPane({
        title: "VISTA",
       // imageSrc: "WebResources/msdyn_/Icons/AnalysisResult.svg",
        hideHeader: true,
        canClose: true,
        width: 600
    }).then(function (pane) {

        // Navigate to a Web Resource inside the side pane
        pane.navigate({
            pageType: "webresource",
            webresourceName: "ppt_embedmedicalequpment"
        });

    }).catch(function (error) {
        console.log(error.message);
    });
}

