let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1625928948523-5n8pjlm60","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Parent.details","fieldValue":"{action.response.records[0].details}"}],"flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutType":"OmniScripts","id":"flex-action-1623820733905","openFlyoutIn":"Modal","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqInProgressSubmittedMobile_1_Vlocity","Id":"0RbHr000000jndF0AY","ManageableState":"unmanaged","MasterLabel":"cfCpqInProgressSubmittedMobile_1_Vlocity","NamespacePrefix":"c"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexMenu","elementLabel":"Menu-4","name":"Menu","property":{"card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"flyoutObj":{"menuItemFlyout4":{"displayName":"Request Pending Approval","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"menuItemFlyout4","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"}},"iconName":"utility:down","menuItems":[{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629434930763","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQViewRecord}","name":"menu-item-1612100275302-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629434952758","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQGenerateDocumentPDF}","name":"menu-item-1612100312317-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQAmendmentHistory}","id":"flex-action-1629434961740","name":"Amendment History","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQAmendmentHistory}","name":"menu-item-1612100357124-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"displayName":"{Label.CPQStatusNotifications}","id":"flex-action-1629434968592","name":"Status Notifications","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQStatusNotifications}","name":"menu-item-1612100381466-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","hasMergeField":false,"id":"state-new-condition-2","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629435993077","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQRequestPendingApproval}","name":"menu-item-1612103374315-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"Web Page":{"targetName":"/lightning/cmp/vlocity_cmt__vlocityLWCOmniWrapper?c__target=c:lWCCPQCancelOrderEnglish&c__layout=lightning&c__tabIcon=custom:custom18&c__ContextId={recordId}"},"actionConditions":{"group":[{"field":"Parent.details.records[0].IsChangesAllowed__c","hasMergeField":false,"id":"state-new-condition-12","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQCancel}","id":"flex-action-1632745529190","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQCancel}","name":"menu-item-1612103430436-0"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex/vlocity_cmt__XOMViewOrderDecomposition?id={Id}"},"displayName":"{Label.CPQViewDecomposition}","id":"flex-action-1629106136604","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQViewDecomposition}","name":"menu-item-1615224572661-0"},{"actionData":{"card":"{card}","stateAction":{"displayName":"{Label.CPQViewOrchestrationPlan}","eventName":"cpqutils","extraParams":{"cartId":"{Id}","ipMethod":"CPQ_OrderActionUtil","utilMethod":"viewOrchestrationPlan"},"hasExtraParams":true,"id":"flex-action-1629106168554","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQViewOrchestrationPlan}","name":"menu-item-1615224727749-0"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"displayName":"{Label.CPQPrintableView}","id":"flex-action-1629106211191","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQPrintableView}","name":"menu-item-1615224887780-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-7","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631196886935","name":"Create Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAgreement}","name":"menu-item-1615225171350-0"},{"actionData":{"card":"{card}","stateAction":{"Record":{"targetAction":"clone","targetId":"{Id}","targetName":"Order"},"displayName":"{Label.CPQClone}","id":"flex-action-1629106247820","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Record","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQClone}","name":"menu-item-1615225295907-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-7","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631197105666","name":"Create Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAmendment}","name":"menu-item-1631196923868-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-20","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-29","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631197149911","name":"Update Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAgreement}","name":"menu-item-1631196942438-0"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-39","operator":"==","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-46","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631197175801","name":"Update Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAmendment}","name":"menu-item-1631197073435-0"}],"overflow":true,"position":"right","record":"{record}","size":"small","type":"action","variant":"neutral"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-4","operator":"==","type":"custom","value":"Order"},{"group":[{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-6","operator":"==","type":"custom","value":"In Progress"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-7","logicalOperator":"||","operator":"==","type":"custom","value":"Submitted"}],"id":"state-condition-5","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order InProgress Submitted","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqInProgressSubmittedMobile","Id":"a3gHr000000Qg85QAC","vlocity_cmt__GlobalKey__c":"cpqInProgressSubmittedMobile/Vlocity/3/1629105681934"};
  export default definition