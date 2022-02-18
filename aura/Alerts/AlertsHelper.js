({
    createCookie : function(name, value, days) {
        var expires;
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }
        document.cookie = name + "=" + escape(value) + expires + "; path=/";
    },
    getCookie: function(name) {
        var cookieString = "; " + document.cookie;
        var parts = cookieString.split("; " + name + "=");
        if (parts.length === 2) {
            return parts.pop().split(";").shift();
        }
        return null;
    },
    callControllerAction : function(component, controllerActionName, actionParams, actionCallback) {
        if (component != null && controllerActionName != null && actionCallback != null){
            var controllerAction = component.get(controllerActionName);
            if (actionParams != null)
            {
                controllerAction.setParams(actionParams);
            }
            controllerAction.setCallback(this, actionCallback);
            $A.enqueueAction(controllerAction);
        }
    },
    processControllerActionResponse : function (response){
        if (response != null){
            var state = response.getState();
            if (state === "SUCCESS") {
                var returnValue = response.getReturnValue();
                console.log(returnValue);
                return returnValue;
            }
            else {
                alert('An error occurred with your request, please try again. If this persists please contact your system adminitrator.');
                console.log("Failed with state: " + state);
            }
        }
        return null;
    },
    createCookie : function createCookie(name, value, days) {
        var expires;
        if (days) {
            const date = new Date(); 
            //date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            date.setTime(date.getTime() + (2147483647)); 
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }
        console.log('cookie being created with name and value as '+name+';'+value);
        document.cookie = name + "=" + escape(value) + expires + "; path=/";
    },
    getCookie : function getCookie(name) {
        var cookieString = "; " + document.cookie;
        var parts = cookieString.split("; " + name + "=");
        if (parts.length === 2) {
            return parts.pop().split(";").shift();
        }
        return null;
    },
    clearCookies: function clearCookies(name) {
        this.createCookie(name, '', null);
    }
})