<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <rules>
        <fullName>Test Deploy or Not</fullName>
        <actions>
            <name>Workflow_test_update_email_notification</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <description>Testing how the rule criteria with formula type is getting committed and deploying.</description>
        <formula>Amount  &gt; 5000  &amp;&amp; ISPICKVAL(DeliveryInstallationStatus__c, &apos;Completed&apos;)</formula>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
