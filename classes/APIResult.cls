public class APIResult {
    private List<Object> c_results;
    private Integer c_totalResultsCount;
    private List<String> c_errors;

    public APIResult(){
        c_results = null;
        c_totalResultsCount = 0;
        c_errors = null;
    }

    public APIResult(List<Object> results){
        c_results = results;
        c_totalResultsCount = 0;
        c_errors = null;
    }

    @AuraEnabled
    public List<Object> Results { get { if (c_results == null) { c_results = new List<Object>(); } return c_results; } set { c_results = value; } }

    @AuraEnabled
    public Integer CurrentResultsCount { get { return c_results != null ? c_results.size() : 0; }}

    @AuraEnabled
    public Integer TotalResultsCount { get { return c_totalResultsCount; } set { c_totalResultsCount = value; }}

    @AuraEnabled
    public List<string> Errors 
    { 
        get 
        { 
            if (c_errors == null){
                c_errors = new List<string>();
            }
            return c_errors; 
        } 
    }

    @AuraEnabled
    public boolean HasErrors { get { return (c_errors == null || c_errors.size() == 0) ? false : true; }}
}