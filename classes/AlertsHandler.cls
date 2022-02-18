public class AlertsHandler {
    @AuraEnabled
    public static APIResult getAlertsForGroup(string groupName){
        APIResult ret = new APIResult();
        try {
            if (string.isBlank(groupName)){
                ret.Errors.add('Group name must be supplied to query alerts.');
            } else {
                Date todaysDate = Date.today();
                List<Alert__c> targetAlerts = [SELECT Id, Name, Message__c , Type__c, Persistent__c FROM Alert__c WHERE Group_Name__c =: groupName AND (Expiration_Date__c = null OR Expiration_Date__c >=: todaysDate) ORDER BY Persistent__c DESC];
                ret.Results = targetAlerts;
            }
        } catch (Exception e){
            ApexLogger.LogException('AlertsHandler', 'getAlertsForGroup', e);
        }
        return ret;
    }
}