export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"training@cme.edu","userId":"005Hr00000FjMqeQA2","userCurrencyCode":"USD","timeStamp":"2022-06-01T14:05:28.583Z","sOmniScriptId":"a29Hr00000AN5F7QAC","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":null,"itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":null,"itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":null,"consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":true},"prefillJSON":"{}","lwcId":"44284f87-643a-fbb7-08de-490095320c85","labelMap":{"MoveDateErrorMessage":"SelectDestinationAndDate:MoveDateErrorMessage","DateTest":"SelectDestinationAndDate:DateTest","ActivationDate":"SelectDestinationAndDate:ActivationDate","LineBreak3":"SelectDestinationAndDate:LineBreak3","ToAccount":"SelectDestinationAndDate:ToAccount","LineBreak2":"SelectDestinationAndDate:LineBreak2","DiscontinuationDate":"SelectDestinationAndDate:DiscontinuationDate","LineBreak1":"SelectDestinationAndDate:LineBreak1","FromAccount":"SelectDestinationAndDate:FromAccount","NavigateAction":"NavigateAction","SubmitNewAssets":"SubmitNewAssets","Submit":"Submit","ValidateSelectedAsset":"ValidateSelectedAsset","SetValues2":"SetValues2","CheckAvailableAssets":"CheckAvailableAssets","RetrieveAllAssets":"RetrieveAllAssets","UpdateOrder":"UpdateOrder","SetValues":"SetValues","SelectDestinationAndDate":"SelectDestinationAndDate","GetAccount":"GetAccount","SetAssetIdValue":"SetAssetIdValue"},"labelKeyMap":{"CPQSelectAccountAndDate":"Move Assets","CPQSingleMoveFromAccount":"Move From Account","CPQSingleMoveDiscontinuationDate":"Discontinuation Date","CPQSingleMoveToAccount":"Move To Account","CPQSingleMoveActivationDate":"Activation Date","CPQSingleMoveDateError":"Discontinuation Date must be less than or equal to Activation date."},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[true,false],"show":null,"pubsub":false,"message":{},"label":"","elementValueMap":{"assetId":"=%AssetIds|1%"},"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetAssetIdValue","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetAssetIdValue","lwcId":"lwc0"},{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[false,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"postMessage":null,"message":{},"label":null,"inProgressMessage":null,"ignoreCache":false,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"assetId","element":"assetId"}],"controlWidth":12,"bundle":"GetAccountFromAsset","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"GetAccount","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"GetAccount","lwcId":"lwc1"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":null,"nextWidth":3,"nextLabel":null,"message":{},"lwcComponentOverride":"","label":"CPQSelectAccountAndDate","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage":{"custom":[]},"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":null,"cancelMessage":null,"cancelLabel":null,"businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"SelectDestinationAndDate":"","FromAccount":"","DiscontinuationDate":"","ToAccount":"","ActivationDate":""},"aggElements":{"DateTest":""}},"offSet":0,"name":"SelectDestinationAndDate","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Lookup","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":true,"placeholder":"","label":"CPQSingleMoveFromAccount","inputWidth":12,"hide":false,"helpText":null,"help":false,"errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"defaultValue":"%assetAccount:Name%","dataSource":{"type":"SObject","mapItems":{"phase2MapItems":[{"InterfaceFieldAPIName__c":"Company:Id","DomainObjectFieldAPIName__c":"name","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"},{"InterfaceFieldAPIName__c":"Company:Name","DomainObjectFieldAPIName__c":"value","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"}],"phase1MapItems":[{"InterfaceObjectName__c":"Asset","InterfaceObjectLookupOrder__c":1,"InterfaceFieldAPIName__c":"Id","FilterValue__c":"\"02iHr00000CDaSFAAA\"","FilterOperator__c":"=","DomainObjectFieldAPIName__c":"Company"}],"inputParameters":[{"inputParam":"%AssetId%","element":"assetId"}]}},"controlWidth":4,"conditionType":"Hide if False","clearValue":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"FromAccount","level":1,"JSONPath":"SelectDestinationAndDate:FromAccount","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bLookup":true,"lwcId":"lwc20-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Line Break","rootIndex":2,"response":null,"propSetMap":{"show":null,"padding":0,"label":"LineBreak1","HTMLTemplateId":""},"name":"LineBreak1","level":1,"JSONPath":"SelectDestinationAndDate:LineBreak1","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc21-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Date","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"modelDateFormat":"yyyy-MM-dd","minDate":"","maxDate":"","label":"CPQSingleMoveDiscontinuationDate","inputWidth":12,"hide":false,"helpText":null,"help":false,"disOnTplt":false,"defaultValue":null,"dateType":"string","dateFormat":"MM-dd-yyyy","controlWidth":4,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"DiscontinuationDate","level":1,"JSONPath":"SelectDestinationAndDate:DiscontinuationDate","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc22-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Line Break","rootIndex":2,"response":null,"propSetMap":{"show":null,"padding":0,"label":"LineBreak1","HTMLTemplateId":""},"name":"LineBreak2","level":1,"JSONPath":"SelectDestinationAndDate:LineBreak2","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc23-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Lookup","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"placeholder":"","label":"CPQSingleMoveToAccount","inputWidth":12,"hide":false,"helpText":null,"help":false,"errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"defaultValue":"","dataSource":{"type":"SObject","mapItems":{"phase2MapItems":[{"InterfaceFieldAPIName__c":"ToAccount:Id","DomainObjectFieldAPIName__c":"name","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"},{"InterfaceFieldAPIName__c":"ToAccount:Name","DomainObjectFieldAPIName__c":"value","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"}],"phase1MapItems":[{"InterfaceObjectName__c":"Account","InterfaceObjectLookupOrder__c":1,"InterfaceFieldAPIName__c":"ParentId","FilterValue__c":"lookupId","FilterOperator__c":"=","DomainObjectFieldAPIName__c":"ToAccount"}],"inputParameters":[{"inputParam":"lookupId","element":"assetAccount:Id"}]}},"controlWidth":4,"conditionType":"Hide if False","clearValue":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"ToAccount","level":1,"JSONPath":"SelectDestinationAndDate:ToAccount","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bLookup":true,"lwcId":"lwc24-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Line Break","rootIndex":2,"response":null,"propSetMap":{"show":null,"padding":0,"label":"LineBreak1","HTMLTemplateId":""},"name":"LineBreak3","level":1,"JSONPath":"SelectDestinationAndDate:LineBreak3","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc25-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":6,"eleArray":[{"type":"Date","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"modelDateFormat":"yyyy-MM-dd","minDate":"","maxDate":"","label":"CPQSingleMoveActivationDate","inputWidth":12,"hide":false,"helpText":null,"help":false,"disOnTplt":false,"defaultValue":null,"dateType":"string","dateFormat":"MM-dd-yyyy","controlWidth":4,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"ActivationDate","level":1,"JSONPath":"SelectDestinationAndDate:ActivationDate","indexInParent":6,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc26-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":7,"eleArray":[{"type":"Formula","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":null,"inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"%DiscontinuationDate% == NULL || %ActivationDate% == NULL || %DiscontinuationDate% <= %ActivationDate%","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Boolean","controlWidth":12,"HTMLTemplateId":""},"name":"DateTest","level":1,"JSONPath":"SelectDestinationAndDate:DateTest","indexInParent":7,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc27-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":8,"eleArray":[{"type":"Validation","rootIndex":2,"response":null,"propSetMap":{"validateExpression":{"group":{"rules":[{"field":"DateTest","data":"true","condition":"="}],"operator":"AND"}},"show":null,"messages":[{"value":true,"type":"Success","text":null,"active":true},{"value":false,"type":"Requirement","text":"CPQSingleMoveDateError","active":true}],"label":"CPQSingleMoveDateError","hideLabel":true,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":""},"name":"MoveDateErrorMessage","level":1,"JSONPath":"SelectDestinationAndDate:MoveDateErrorMessage","indexInParent":8,"index":0,"children":[],"bHasAttachment":false,"bMessaging":true,"lwcId":"lwc28-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"SelectDestinationAndDate","lwcId":"lwc2"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[false,false],"show":null,"pubsub":false,"message":{},"label":null,"elementValueMap":{"showAssetList":true,"parAccountId":"%SelectDestinationAndDate:ToAccount%","moveOutAccountId":"%assetAccount:Id%","moveInAccountId":"%SelectDestinationAndDate:ToAccount%","SelectInOutDate":{"MoveOutDate":"%SelectDestinationAndDate:DiscontinuationDate%","MoveInDate":"%SelectDestinationAndDate:ActivationDate%"},"Pricebook":"Standard","OrderId":"%OrderId%","ObjectId":"%OrderId%","MoveOutDate":"%SelectDestinationAndDate:DiscontinuationDate%","MoveInDate":"%SelectDestinationAndDate:ActivationDate%","ContextId":"%assetAccount:Id%"},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetValues","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetValues","lwcId":"lwc3"},{"type":"DataRaptor Post Action","propSetMap":{"wpm":false,"validationRequired":"Submit","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"postTransformBundle":"","postMessage":null,"message":{},"label":null,"inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"bundle":"UpdateOrderAccount","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"UpdateOrder","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"UpdateOrder","lwcId":"lwc4"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","ProvisioningStatusList":"Active","JSON Node":"AllAssets"},"remoteMethod":"getAssets","remoteClass":"OmniMoveAssetWrapper","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"RetrieveAllAssets","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"RetrieveAllAssets","lwcId":"lwc5"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","JSON Node":"SelectAsset","Elem Name":"AllAssets"},"remoteMethod":"checkAvailableAssets","remoteClass":"OmniMoveAssetWrapper","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CheckAvailableAssets","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"CheckAvailableAssets","lwcId":"lwc6"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[false,false],"show":null,"pubsub":false,"message":{},"label":null,"elementValueMap":{"SelectAssets":{"SelectAsset":"%SelectAsset%"}},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetValues2","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetValues2","lwcId":"lwc7"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","jsonPath":"SelectAssets:SelectAsset","JSON Node":"FilteredAsset","Elem Name":"AllAssets"},"remoteMethod":"validateSelectedAsset","remoteClass":"OmniMoveAssetWrapper","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"ValidateSelectedAsset","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"ValidateSelectedAsset","lwcId":"lwc8"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","jsonPath":"SelectAssets:SelectAsset","JSON Node":"FilteredAsset"},"remoteMethod":"moveAssets","remoteClass":"OmniMoveAssetWrapper","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"Submit","level":0,"indexInParent":9,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"Submit","lwcId":"lwc9"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","jsonPath":"SelectAssets:SelectAsset","JSON Node":"FilteredAsset"},"remoteMethod":"moveNewAssets","remoteClass":"OmniMoveAssetWrapper","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SubmitNewAssets","level":0,"indexInParent":10,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"SubmitNewAssets","lwcId":"lwc10"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetUrl":"/lightning/app/vlocity_cmt__Industries_CPQ/r/%fdoId%/view","targetType":"Web Page","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":null,"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"NavigateAction","level":0,"indexInParent":11,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"NavigateAction","lwcId":"lwc11"}],"bReusable":true,"bpVersion":3,"bpType":"CPQ","bpSubType":"SingleMove","bpLang":"Multi-Language","bHasAttachment":false,"lwcVarMap":{}};