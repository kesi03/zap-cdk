export type AlertAction = 'passIfPresent' | 'passIfAbsent'; // Allowed actions for alert tests
export type AlertConfidence = 'False Positive' | 'Low' | 'Medium' | 'High' | 'Confirmed'; // Allowed confidence levels
export type AlertRisk = 'Informational' | 'Low' | 'Medium' | 'High'; // Allowed risk levels
export type OnFailType = 'warn' | 'error' | 'info'; // Allowed onFail values

/**
 * Interface for alert tests
 *  Yaml:
      - name: 'test one'                       # Name of the test, optional
        type: alert                            # Specifies that the test is of type 'alert'
        action: passIfPresent/passIfAbsent     # String: The condition (presence/absence) of the alert, default: passIfAbsent  
        scanRuleId:                            # Integer: The id of the scanRule which generates the alert, mandatory  
        alertName:                             # String: The name of the alert generated, optional
        url: http://www.example.com/path       # String: The url of the request corresponding to the alert generated, optional
        method:                                # String: The method of the request corresponding to the alert generated, optional
        attack:                                # String: The actual attack which generated the alert, optional
        param:                                 # String: The parameter which was modified to generate the alert, optional
        evidence:                              # String: The evidence corresponding to the alert generated, optional
        confidence:                            # String: The confidence of the alert, one of 'False Positive', 'Low', 'Medium', 'High', 'Confirmed', optional
        risk:                                  # String: The risk of the alert, one of 'Informational', 'Low', 'Medium', 'High', optional
        otherInfo:                             # String: Additional information corresponding to the alert, optional
        onFail: 'info'                         # String: One of 'warn', 'error', 'info', mandatory
 */

export interface IAlertTest {
  name?: string; // Name of the test, optional
  type: 'alert'; // Specifies that the test is of type 'alert'
  action?: AlertAction; // Condition (presence/absence) of the alert, default: passIfAbsent
  scanRuleId: number; // The id of the scanRule which generates the alert, mandatory
  alertName?: string; // The name of the alert generated, optional
  url?: string; // The url of the request corresponding to the alert generated, optional
  method?: string; // The method of the request corresponding to the alert generated, optional
  attack?: string; // The actual attack which generated the alert, optional
  param?: string; // The parameter which was modified to generate the alert, optional
  evidence?: string; // The evidence corresponding to the alert generated, optional
  confidence?: AlertConfidence; // The confidence of the alert, optional
  risk?: AlertRisk; // The risk of the alert, optional
  onFail: OnFailType; // Action to take on failure, mandatory
}

/**
 * tests:
      - name: 'test one'                      # Name of the test, optional
        type: monitor                         # Specifies that the test is of type 'monitor'
        statistic: 'stats.addon.something'    # Name of an integer / long statistic
        site:                                 # Name of the site for site specific tests, supports vars
        threshold: 10                         # The threshold at which a statistic fails
        onFail: 'info'                        # String: One of 'warn', 'error', 'info', mandatory

 */
export interface IMonitorTest {
    name?: string; // Name of the test, optional
    type: 'monitor'; // Specifies that the test is of type 'monitor'
    statistic: string; // Name of an integer / long statistic
    site?: string; // Name of the site for site specific tests, supports vars
    onFail: OnFailType; // String: One of 'warn', 'error', 'info', mandatory
}

/**
 * tests:
      - name: 'test one'                      # Name of the test, optional
        type: stats                           # Specifies that the test is of type 'stats'
        statistic: 'stats.addon.something'    # Name of an integer / long statistic
        site:                                 # Name of the site for site specific tests, supports vars
        operator: '>='                        # One of '==', '!=', '>=', '>', '<', '<='
        value: 10                             # Value to compare statistic against
        onFail: 'info'                        # String: One of 'warn', 'error', 'info', mandatory
 */

export interface IStatisticsTest{
    name?: string; // Name of the test, optional
    type: 'stats'; // Specifies that the test is of type 'stats'
    statistic: string; // Name of an integer / long statistic
    site?: string; // Name of the site for site specific tests, supports vars
    operator: '==' | '!=' | '>=' | '>' | '<' | '<='; // One of '==', '!=', '>=', '>', '<', '<='
    value: number; // Value to compare statistic against
    onFail: OnFailType; // String: One of 'warn', 'error', 'info', mandatory
}

/**
 * tests:
      - name: 'test one'                      # Name of the test, optional
        type: url                             # Specifies that the test is of type 'url'
        url: http://www.example.com/path      # String: The URL to be tested.
        operator: 'and'                       # One of 'and', 'or', default is 'or'
        requestHeaderRegex:                   # String: The regular expression to be matched in the request header, optional
        requestBodyRegex:                     # String: The regular expression to be matched in the request body, optional
        responseHeaderRegex:                  # String: The regular expression to be matched in the response header, optional
        responseBodyRegex:                    # String: The regular expression to be matched in the response body, optional
        onFail: 'info'                        # String: One of 'warn', 'error', 'info', mandatory
 */

export interface IUrlTest {
    name?: string; // Name of the test, optional
    type: 'url'; // Specifies that the test is of type 'url'
    url: string; // The URL to be tested
    operator: 'and' | 'or'; // One of 'and', 'or', default is 'or'
    requestHeaderRegex?: string; // The regular expression to be matched in the request header, optional
    requestBodyRegex?: string; // The regular expression to be matched in the request body, optional
    responseHeaderRegex?: string; // The regular expression to be matched in the response header, optional
    responseBodyRegex?: string; // The regular expression to be matched in the response body, optional
    onFail: OnFailType; // String: One of 'warn', 'error', 'info', mandatory
}



export type ITest = IAlertTest | IMonitorTest | IStatisticsTest | IUrlTest;