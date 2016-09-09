(function(){
    STX.Custom = {};
    STX.Custom.Views = {};
    STX.Custom.Views.enableView = function(i) {
        var view = STX.Views.views[i];
        var layout=view[STX.first(view)];
        var retVal = '';
        if(layout.interval == 1) {
            retVal = layout.periodicity + 'm';
        } else if(layout.interval == 60) {
            retVal = layout.periodicity + 'H';
        } else if(layout.interval == 'week') {
            retVal = '1W';
        } else if(layout.interval == 'day') {
            retVal = '1D';
        } else if(layout.interval == 'tick') {
            retVal = 'TICK';
        } else if(layout.interval == 'month') {
            retVal = (layout.periodicity == 1) ? '1M' : '1Y';
        }
        //$rootScope.$broadcast('periodicity::change', retVal);
        STX.Views.stx.importLayout(layout, STX.Views.managePeriodicity, true);
        STX.Views.currentView=i;
        STX.Views.refreshDisplay();
        if(STX.Views.stx.changeCallback){
            STX.Views.stx.changeCallback(STX.Views.stx, "layout");
        }
    };

    /**
     * Refreshes the views display. This is called whenever the screensize changes so that iscrolls can refresh themselves. Call this
     * manually if HTML changes affect the size of the footer.
     * @memberOf STX.Views
     * @version ChartIQ Advanced Package
     */
    STX.Custom.Views.refreshDisplay=function(){
        var wrapper=$$$("#stxViewWrapper");
        STX.clearNode(wrapper);
        function leftView(ii){
            return function(e){STX.Custom.Views.enableView(ii);};
        }
        function rightView(ii){
            return function(e){vm.openHandleViewDialog(ii)}
        }
        for(var i=0;i<STX.Views.views.length;i++){
            var view=STX.Views.views[i];
            var li=STX.newChild(wrapper, "li");
            li.innerHTML=STX.first(view);
            li.title="Right click to manage";
            if(STX.Views.currentView==i) li.className="current";
            STX.ScrollManager.attach(li, leftView(i));
            STX.ScrollManager.attachRightClick(li, rightView(i));
        }
        var panel=$$$("#stxViews");
        var scroller=$$$("#stxSavedViews").parentNode;
        scroller.rightClickable=true;
        var rightMargin=panel.clientWidth-$$$("#stxNewView").offsetLeft;
        scroller.style.width=(panel.clientWidth-scroller.offsetLeft-rightMargin)+"px";
        STX.Views.scroll.refresh();
    };


    /**
     * Deletes the selected view
     * @param  {number} i Index into STX.Views.views of the view to delete
     * @memberOf STX.Views
     * @version ChartIQ Advanced Package
     */
    STX.Custom.Views.deleteView=function(i){
        var currentViewName=STX.first(STX.Views.views[i]);
        STX.Views.views.splice(i,1);
        STX.Views.currentView=-1;
        for(var j=0;j<STX.Views.length;j++){
            if(currentViewName==STX.first(STX.Views.views[j])) STX.Views.currentView=j;
        }
        STX.Custom.Views.refreshDisplay();
        if(!STX.Views.views.length){
            STX.Views.stxStorageManager.remove("stx-views");
        }else{
            STX.Views.stxStorageManager.store("stx-views", JSON.stringify(STX.Views.views));
        }
    };


    /**
     * Saves the current layout as a new view. The name of the view is taken from the dialog.
     * @memberOf STX.Views
     * @version ChartIQ Advanced Package
     */
    STX.Custom.Views.saveView=function(){
        var viewName=$$$("#stxViewEditName").value;
        var view;
        for(var i=0;i<STX.Views.views.length;i++){
            view=STX.Views.views[i];
            if(viewName==STX.first(view)){
                STX.Views.currentView=i;
                STX.Custom.Views.refreshDisplay();
                break;
            }
        }
        if(i==STX.Views.views.length){
            view={};
            view[viewName]={};
            STX.Views.views.push(view);
            STX.Views.currentView=STX.Views.views.length-1;
            STX.Custom.Views.refreshDisplay();
        }
        STX.DialogManager.dismissDialog();
        view[viewName]=STX.Views.stx.exportLayout();
        delete view[viewName].candleWidth;
        STX.Views.stxStorageManager.store("stx-views", JSON.stringify(STX.Views.views));
    };

})();
