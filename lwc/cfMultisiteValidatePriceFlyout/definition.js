let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\"groups\": []}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1634205529348-7hygfouah","label":"update records","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"groups","fieldValue":"{action.groups}"},{"fieldName":"hasAtleastOneValidGroup","fieldValue":"{action.hasAtleastOneValidGroup}"}],"id":"flex-action-1634731487537","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:update_to_validate_prices","element":"action","eventLabel":"pubsub","eventname":"update_to_validate_prices","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfMultisiteValidatePriceFlyout_1_Vlocity","Id":"0RbHp0000014IyR0AE","ManageableState":"unmanaged","MasterLabel":"cfMultisiteValidatePriceFlyout_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","states":[{"actions":[],"childCards":["MultiSiteGroupValidationTable"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-heading_large%20slds-text-align_center%22%3E%7BLabel.CPQPriceValidateLabel%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"},{"children":[{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-0","key":"element_element_block_1_0_block_0_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Text-1","key":"element_element_block_1_0_outputField_1_0","name":"Text","parentElementKey":"element_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.MSGroupName%7D%3C/div%3E","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Text-1-clone-0","key":"element_element_block_1_0_outputField_2_0","name":"Text","parentElementKey":"element_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-heading_small%22%3E%7BLabel.MSReason%7D%3C/div%3E","record":"{record}"},"size":{"default":"8","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"8","isResponsive":false},"sizeClass":"slds-size_8-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"8","isResponsive":false},"sizeClass":"slds-size_8-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"groups.length","hasMergeField":false,"id":"state-new-condition-7","operator":"!=","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#ccc","radius":"","style":"solid","type":"border_top","width":"1"},"class":"cpq__multisiteTableHeader slds-border_top slds-m-top_large ","container":{"class":"cpq__multisiteTableHeader"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:large","size":"large","type":"top"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#ccc","radius":"","style":"solid","type":"border_top","width":"1"},"class":"cpq__multisiteTableHeader slds-border_top slds-m-top_large ","container":{"class":"cpq__multisiteTableHeader"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:large","size":"large","type":"top"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Text-1-clone-0","key":"element_element_block_2_0_outputField_0_0","name":"Text","parentElementKey":"element_block_2_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-heading_small%20slds-text-align_left%22%3E%7BLabel.MSNoGroupSelMsg%7D%3C/div%3E","record":"{record}"},"size":{"default":"8","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"8","isResponsive":false},"sizeClass":"slds-size_8-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"8","isResponsive":false},"sizeClass":"slds-size_8-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-clone-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"groups.length","hasMergeField":false,"id":"state-new-condition-7","operator":"==","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#ccc","radius":"","style":"solid","type":"border_top","width":"1"},"class":"cpq__multisiteTableHeader slds-border_top slds-m-top_x-large ","container":{"class":"cpq__multisiteTableHeader"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:x-large","size":"x-large","type":"top"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#ccc","radius":"","style":"solid","type":"border_top","width":"1"},"class":"cpq__multisiteTableHeader slds-border_top slds-m-top_x-large ","container":{"class":"cpq__multisiteTableHeader"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:x-large","size":"x-large","type":"top"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-3","name":"FlexCard","property":{"cardName":"MultiSiteGroupValidationTable","cardNode":"{record.groups}","data-conditions":{"group":[{"field":"groups.length","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-4-Action-1","key":"element_element_block_4_0_action_0_0","name":"Action","parentElementKey":"element_block_4_0","property":{"actionList":[{"actionIndex":0,"buttonVariant":"neutral","card":"{card}","displayAsButton":true,"draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1634640405796-q8utkzstq","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.Cancel}","eventName":"close_modal_validate_price","id":"flex-action-1634644396223","message":"close","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"}],"buttonVariant":"neutral","card":"{card}","displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"{Label.Cancel}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisiteButton slds-m-right_xx-small ","container":{"class":"cpq__multisiteButton"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"right:xx-small","size":"xx-small","type":"right"}],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisiteButton slds-m-right_xx-small ","container":{"class":"cpq__multisiteButton"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"right:xx-small","size":"xx-small","type":"right"}],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-4-Action-2","key":"element_element_block_4_0_action_1_0","name":"Action","parentElementKey":"element_block_4_0","property":{"actionList":[{"actionIndex":0,"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"hasAtleastOneValidGroup","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1635250551511-sx4qz0sir","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.CPQPriceValidateLabel}","eventName":"cpq_{recordId}_{Parent.type}","extraParams":{"pollingInterval":"3000","triggerAPI":"true"},"hasExtraParams":true,"id":"flex-action-1635250554067","message":"multisite_handle_validateAndPrice","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}","styles":{"label":{"textAlign":""}}}],"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"hasAtleastOneValidGroup","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"{Label.CPQPriceValidateLabel}","record":"{record}","showSpinner":"false","stateObj":"{record}","styles":{"label":{"textAlign":""}}},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left cpq__multisiteButton ","container":{"class":"cpq__multisiteButton"},"elementStyleProperties":{"styles":{"label":{"textAlign":""}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"left","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left cpq__multisiteButton ","container":{"class":"cpq__multisiteButton"},"elementStyleProperties":{"styles":{"label":{"textAlign":""}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"left","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-4-Action-1-clone-0","key":"element_element_block_4_0_action_2_0","name":"Action","parentElementKey":"element_block_4_0","property":{"actionList":[{"actionIndex":0,"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"hasAtleastOneValidGroup","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"draggable":true,"hideActionIcon":true,"isOpen":true,"key":"1634731098340-hgmp99e95","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.CPQPriceValidateLabel}","eventName":"setValues","extraParams":{"pollingInterval":"3000","triggerAPI":"true"},"hasExtraParams":true,"id":"flex-action-1634731114651","message":"multisite_handle_validateAndPrice","openUrlIn":"Current Window","subType":"PubSub","type":"cardAction","vlocityIcon":"standard-default"},"stateObj":"{record}","styles":{"label":{"textAlign":""}}}],"buttonVariant":"neutral","card":"{card}","data-conditions":{"group":[{"field":"hasAtleastOneValidGroup","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"{Label.CPQPriceValidateLabel}","record":"{record}","showSpinner":"false","stateObj":"{record}","styles":{"label":{"textAlign":""}}},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left cpq__multisiteButton ","container":{"class":"cpq__multisiteButton"},"elementStyleProperties":{"styles":{"label":{"textAlign":""}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"left","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left cpq__multisiteButton ","container":{"class":"cpq__multisiteButton"},"elementStyleProperties":{"styles":{"label":{"textAlign":""}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"left","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-4","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisiteFooter slds-p-around_x-small slds-m-top_medium ","container":{"class":"cpq__multisiteFooter"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:medium","size":"medium","type":"top"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisiteFooter slds-p-around_x-small slds-m-top_medium ","container":{"class":"cpq__multisiteFooter"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:medium","size":"medium","type":"top"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-right_small slds-p-left_small slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"right:small","size":"small","type":"right"},{"label":"left:small","size":"small","type":"left"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"Validate and Price","Id":"a3gHp00000Isy48QAS","vlocity_cmt__GlobalKey__c":"MultisiteValidatePriceFlyout/Vlocity/1/1634205365413"};
  export default definition