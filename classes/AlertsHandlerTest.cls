@isTest
public class AlertsHandlerTest {

    @isTest
    static void runSuccessTest(){
        string groupName = 'FIComm';
        APIResult result = AlertsHandler.getAlertsForGroup(groupName);
        System.assert(result.Results != null);
	}
    
    @isTest
    static void runErrorTest(){
        string groupName = '';
        APIResult result = AlertsHandler.getAlertsForGroup(groupName);
        System.assert(result.Errors.size() > 0);
	}
}