({
	doInit : function(component, event, helper) {
        console.log('in init');
		var alertGroup = component.get("v.alertGroup");
        var actionParams = { "groupName" : alertGroup};
        console.log(alertGroup);
        helper.callControllerAction(component, "c.getAlertsForGroup", actionParams, function(response) {
            var returnValue = helper.processControllerActionResponse(response);
            var arrayElement = [];
            if (returnValue != null){
                var myList = returnValue.Results;
                console.log(myList);
                // check to make sure the list isn't null
                if (myList != null) {
                    // get the length of the list (in this case number of rows/records)
                    var listLength = myList.length;
                    // loop through the list of records and stop once you are at the list length
                    for (var i=0; i < listLength; i++) {
                        var alertName = myList[i].Name;
                        console.log('myList[i]: ' + myList[i].Name); // returns the row
                        var compareKey = 'LSKey[c]'+myList[i].Name;
                        console.log('compareKey is '+compareKey);
                        var retrievedCookie = helper.getCookie(alertName);
                        console.log('retrived Cookie is '+retrievedCookie);
                        console.log('current alert value is '+myList[i].Name);
                        if(myList[i].Name !== retrievedCookie)
                           arrayElement.push(myList[i]);
                    }
                }
                // component.set("v.alerts", returnValue.Results);
                component.set("v.alerts", arrayElement);
            }
		});
    },
    closeAlert : function(component, event, helper) {
        //alert('dissmissable alert closed');
        console.log('alert is appearing');
        if (event && event.target){
            var targetAlertId = event.target.getAttribute('data-alert-id');
            console.log('targetAlertId is '+targetAlertId);
            var userId = $A.get("$SObjectType.CurrentUser.Id");
            if (targetAlertId){
                helper.createCookie(targetAlertId,targetAlertId,2147483647);
                var cookieName = helper.getCookie(targetAlertId);
                console.log('retrived Cookie is '+cookieName);
                var targetAlert = document.getElementById(targetAlertId);
                console.log('targetAlert is '+targetAlert);
                if (targetAlert) {
                    targetAlert.style.display = 'none';
                }
            }
        }
    }
                                   
})