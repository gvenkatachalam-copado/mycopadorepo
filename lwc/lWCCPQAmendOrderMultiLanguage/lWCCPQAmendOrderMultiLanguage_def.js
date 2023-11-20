export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"training@cme.edu","userId":"005Hr00000FKUERQA2","userCurrencyCode":"USD","timeStamp":"2022-06-01T13:44:39.572Z","sOmniScriptId":"a29Hr000009OccfQAS","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":null,"itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":null,"itemsKey":"knowledgeItems","id":"vlcKnowledge"}],"message":{},"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currencyCode":"","consoleTabTitle":null,"consoleTabLabel":null,"consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":false},"prefillJSON":"{}","lwcId":"9be95ee1-0ea1-943a-ebae-c7710cfa7561","labelMap":{"DisplayErrors":"PreValidateFailure:DisplayErrors","FollowOnOrderConfirmation":"PreValidateFailure:FollowOnOrderConfirmation","RedirectToCurrentOrderCartNavigate":"RedirectToCurrentOrderCartNavigate","CreateFollowOnOrderDoneNavigate":"CreateFollowOnOrderDoneNavigate","CreateFollowOnOrder":"CreateFollowOnOrder","CreateSupplementalOrderDoneNavigate":"CreateSupplementalOrderDoneNavigate","CreateSupplementalOrder":"CreateSupplementalOrder","PreValidateFailure":"PreValidateFailure","PreValidate":"PreValidate"},"labelKeyMap":{"OSPrevalidateStepLabel":"Prevalidate","UnableToPauseOrderFulfilment":"Unable to pause order fulfilment","UserPromptCreateFollowOnOrder":"The order fulfilment could not be paused. Do you want to create a Follow-On order?","FollowOnYes":"Yes","FollowOnNo":"No","OrderFreezeErrorOccurred":"An error occurred when a request to Amend was made."},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":null,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"PreValidate","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"preValidate","remoteClass":"vlocity_cmt.CPQAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":"OSPrevalidateStepLabel","inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"cartId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"PreValidate","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"PreValidate","lwcId":"lwc0"},{"type":"Step","propSetMap":{"validationRequired":true,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"PreValidate:records|1:isPONR","data":"true","condition":"="},{"field":"PreValidate:messages|1:severity","data":"ERROR","condition":"="}],"operator":"OR"}},"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","previousWidth":3,"previousLabel":null,"nextWidth":3,"nextLabel":null,"label":"UnableToPauseOrderFulfilment","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":null,"cancelMessage":null,"cancelLabel":null,"allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"PreValidateFailure":"","FollowOnOrderConfirmation":""},"aggElements":{}},"offSet":0,"name":"PreValidateFailure","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Radio","rootIndex":1,"response":null,"propSetMap":{"show":{"group":{"rules":[{"field":"PreValidate:records|1:isPONR","data":"true","condition":"="}],"operator":"AND"}},"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[{"value":"FollowOnYes","name":"FollowOnYes","autoAdv":null},{"value":"FollowOnNo","name":"FollowOnNo","autoAdv":null}],"optionWidth":100,"optionSource":{"type":"","source":""},"optionHeight":100,"label":"UserPromptCreateFollowOnOrder","imageCountInRow":3,"horizontalMode":false,"hide":false,"helpText":"","help":false,"enableCaption":true,"disOnTplt":false,"defaultValue":null,"controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"FollowOnOrderConfirmation","level":1,"JSONPath":"PreValidateFailure:FollowOnOrderConfirmation","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bRadio":true,"lwcId":"lwc10-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Text Block","rootIndex":1,"response":null,"propSetMap":{"textKey":"","text":"","show":{"group":{"rules":[{"field":"PreValidate:messages|1:severity","data":"ERROR","condition":"="},{"field":"PreValidate:records|1:isPONR","data":"false","condition":"="}],"operator":"AND"}},"label":"OrderFreezeErrorOccurred","disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"DisplayErrors","level":1,"JSONPath":"PreValidateFailure:DisplayErrors","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc11-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"PreValidateFailure","lwcId":"lwc1"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Submit","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"PreValidate:records|1:isPONR","data":"false","condition":"="},{"field":"PreValidate:messages|1:severity","data":"ERROR","condition":"<>"}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"CreateSupplementalOrder","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"createSupplementalOrder","remoteClass":"vlocity_cmt.CPQAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":"","inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"intent":"amend","cartId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CreateSupplementalOrder","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"CreateSupplementalOrder","lwcId":"lwc2"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetUrl":"/lightning/app/vlocity_cmt__Industries_CPQ/r/%CreateSupplementalOrder:records|1:supplementalOrderId%/view","targetType":"Web Page","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"PreValidate:records|1:isPONR","data":"false","condition":"="},{"field":"PreValidate:messages|1:severity","data":"ERROR","condition":"<>"}],"operator":"AND"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CreateSupplementalOrderDoneNavigate","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"CreateSupplementalOrderDoneNavigate","lwcId":"lwc3"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"PreValidateFailure:FollowOnOrderConfirmation","data":"FollowOnYes","condition":"="}],"operator":"OR"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"CreateFollowOnOrder","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"createFollowOnOrder","remoteClass":"vlocity_cmt.CPQAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":"","inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"supplementalOrderType":"amend","cartId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CreateFollowOnOrder","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"CreateFollowOnOrder","lwcId":"lwc4"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetUrl":"/lightning/app/vlocity_cmt__Industries_CPQ/r/%CreateFollowOnOrder:records|1:followOnOrderId%/view","targetType":"Web Page","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"PreValidateFailure:FollowOnOrderConfirmation","data":"FollowOnYes","condition":"="}],"operator":"OR"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CreateFollowOnOrderDoneNavigate","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"CreateFollowOnOrderDoneNavigate","lwcId":"lwc5"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetUrl":"/lightning/app/vlocity_cmt__Industries_CPQ/r/%ContextId%/view","targetType":"Web Page","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"PreValidateFailure:FollowOnOrderConfirmation","data":"FollowOnNo","condition":"="}],"operator":"AND"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"RedirectToCurrentOrderCartNavigate","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"RedirectToCurrentOrderCartNavigate","lwcId":"lwc6"}],"bReusable":false,"bpVersion":2,"bpType":"LWCCPQ","bpSubType":"AmendOrder","bpLang":"Multi-Language","bHasAttachment":false,"lwcVarMap":{}};