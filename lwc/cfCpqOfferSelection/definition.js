let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"dsDelay":"","inputMap":{"cartId":"{Parent.cartId}","productId":"{Parent.productId}"},"ipMethod":"CPQ_getCartsTargetOffers","resultVar":"","vlocityAsync":false}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1636461016495-f3i14s58q","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"record","fieldValue":"{action.updatedRecords}"}],"id":"flex-action-1636363166977","message":"{\"type\":\"IntegrationProcedures\",\"value\":{\"dsDelay\":\"\",\"ipMethod\":\"CPQ_getCartsTargetOffers\",\"vlocityAsync\":false,\"inputMap\":{\"cartId\":\"{Parent.cartId}\",\"productId\":\"{Parent.productId}\",\"query\":\"{action.value}\"},\"resultVar\":\"\"},\"orderBy\":{\"name\":\"\",\"isReverse\":false},\"contextVariables\":[{\"name\":\"Parent.cartId\",\"val\":\"801Hp00000PWuToYAG\",\"id\":4},{\"name\":\"Parent.productId\",\"val\":\"01tHp000008znBPYA0\",\"id\":8},{\"name\":\"action\",\"val\":\"\",\"id\":5},{\"name\":\"action.value\",\"val\":\"\",\"id\":6}]}","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:offersearchselect","element":"action","eventLabel":"pubsub","eventname":"offersearchselect","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"},{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1636461716319-02zy39etd","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"cartId":"{recordId}","ipMethod":"CPQ_getCartsTargetOffers","productId":"{Parent.productId}","utilMethod":"handleCategorySelection","value":"{action.value}"},"hasExtraParams":true,"id":"flex-action-1636461716366","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"categorySelect_{recordId}","displayLabel":"categorySelect_{recordId}:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-1","recordIndex":"0","showSpinner":"false"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqOfferSelection_1_Vlocity","Id":"0RbHp0000014IzU0AE","ManageableState":"unmanaged","MasterLabel":"cfCpqOfferSelection_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":false,"osSupport":true,"selectableMode":"Multi","sessionVars":[{"name":"view","val":"tile"},{"name":"isListViewSelected","val":"false"},{"name":"isTileViewSelected","val":"true"},{"name":"flow","val":"cop"}],"states":[{"actions":[],"childCards":["cpqProductSearch","cpqProductTileList"],"components":{"layer-0":{"children":[{"children":[{"children":[{"class":"slds-col ","element":"flexRadioInput","elementLabel":"Block-0-Block-0-Radio-0","key":"element_element_element_block_0_0_block_0_0_flexRadioInput_0_0","name":"Radio","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","propertyObj":{"controlHeight":"100","controlWidth":"100","customProperties":[{"id":0,"label":"name","value":"categorySelect_{recordId}"}],"enabledCaption":"true","imageCountInRow":"3","label":"","name":"Block-0-Block-0-Radio-0","options":[{"id":0,"imgId":"","label":"Qualified","selected":true,"value":"Qualified"},{"id":1,"imgId":"","label":"Disqualified","selected":false,"value":"Disqualified"}],"radioDisplayValue":"radiogroup.horizontal","value":"Qualified"},"record":"{record}","type":"radiogroup.horizontal"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-right_small slds-m-top_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:small","size":"small","type":"top"}],"padding":[{"label":"right:small","size":"small","type":"right"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-right_small slds-m-top_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:small","size":"small","type":"top"}],"padding":[{"label":"right:small","size":"small","type":"right"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-0","key":"element_element_block_0_0_block_0_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_6-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_6-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-0-Block-1-FlexCard-0","key":"element_element_element_block_0_0_block_1_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_element_block_0_0_block_1_0","property":{"cardName":"cpqProductSearch","cardNode":"","isChildCardTrackingEnabled":false,"parentAttribute":{"flow":"{Session.flow}","productId":"{Parent.productId}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"9","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"9","isResponsive":false},"sizeClass":"slds-size_9-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"9","isResponsive":false},"sizeClass":"slds-size_9-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"flexToggle","elementLabel":"Block-0-Block-1-Toggle-1","key":"element_element_element_block_0_0_block_1_0_flexToggle_1_0","name":"Toggle","parentElementKey":"element_element_block_0_0_block_1_0","property":{"action":{"actionData":{"card":"{card}","isTrackingDisabled":false,"stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"isTileViewSelected","fieldValue":"true"},{"fieldName":"Session.view","fieldValue":"tile"},{"fieldName":"isListViewSelected","fieldValue":"false"}],"id":"flex-action-1633071397807","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"alternativeText":"Tile View","card":"{card}","checked":"\\{isTileViewSelected}","disabled":"false","iconName":"utility:tile_card_list","label":"Toggle","name":"Toggle","record":"{record}","type":"statefulIcon","updateDS":false},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-m-top_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"right","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-m-top_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"right","color":""}}}],"type":"element"},{"class":"slds-col ","element":"flexToggle","elementLabel":"Block-0-Block-1-Toggle-2","key":"element_element_element_block_0_0_block_1_0_flexToggle_2_0","name":"Toggle","parentElementKey":"element_element_block_0_0_block_1_0","property":{"action":{"actionData":{"card":"{card}","isTrackingDisabled":false,"stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"isListViewSelected","fieldValue":"true"},{"fieldName":"Session.view","fieldValue":"list"},{"fieldName":"isTileViewSelected","fieldValue":"false"}],"id":"flex-action-1633071413952","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"alternativeText":"List View","card":"{card}","checked":"\\{isListViewSelected}","disabled":"false","iconName":"utility:list","label":"Toggle","name":"Toggle","record":"{record}","type":"statefulIcon"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left slds-m-top_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"left","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left slds-m-top_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"left","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-1","key":"element_element_block_0_0_block_1_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_6-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_6-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cstrong%20class=%22slds-text-heading_small%20slds-text-color_default%22%3ENo%20replacable%20offers%20available%3C/strong%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"records.length","hasMergeField":false,"id":"state-new-condition-9","operator":"<=","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"},{"children":[{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-0","key":"element_element_block_2_0_block_0_0","name":"Block","parentElementKey":"element_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-checkbox","container":{"class":""},"customClass":"cpq__productlist-header-checkbox","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-checkbox","container":{"class":""},"customClass":"cpq__productlist-header-checkbox","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-1-Text-0","key":"element_element_element_block_2_0_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_2_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3EName%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-1","key":"element_element_block_2_0_block_1_0","name":"Block","parentElementKey":"element_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productName","container":{"class":""},"customClass":"cpq__productlist-header-productName","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productName","container":{"class":""},"customClass":"cpq__productlist-header-productName","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-2-Text-0","key":"element_element_element_block_2_0_block_2_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_2_0_block_2_0","property":{"card":"{card}","mergeField":"%3Cdiv%3EDescription%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-2","key":"element_element_block_2_0_block_2_0","name":"Block","parentElementKey":"element_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productDescription","container":{"class":""},"customClass":"cpq__productlist-header-productDescription","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productDescription","container":{"class":""},"customClass":"cpq__productlist-header-productDescription","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-3-Text-0","key":"element_element_element_block_2_0_block_3_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_2_0_block_3_0","property":{"card":"{card}","mergeField":"%3Cdiv%3EOne%20time%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-3","key":"element_element_block_2_0_block_3_0","name":"Block","parentElementKey":"element_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-4-Text-0","key":"element_element_element_block_2_0_block_4_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_2_0_block_4_0","property":{"card":"{card}","mergeField":"%3Cdiv%3ERecurring%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-4","key":"element_element_block_2_0_block_4_0","name":"Block","parentElementKey":"element_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-6","key":"element_element_block_2_0_block_5_0","name":"Block","parentElementKey":"element_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-actions","container":{"class":""},"customClass":"cpq__productlist-header-actions","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-actions","container":{"class":""},"customClass":"cpq__productlist-header-actions","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"Session.view","hasMergeField":false,"id":"state-new-condition-10","operator":"==","type":"custom","value":"list"},{"field":"records.length","hasMergeField":false,"id":"state-new-condition-4","logicalOperator":"&&","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-3","name":"FlexCard","property":{"cardName":"cpqProductTileList","cardNode":"{record.records}","data-conditions":{"group":[{"field":"records.length","hasMergeField":false,"id":"state-new-condition-2","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"flow":"{Session.flow}","view":"{Session.view}"},"recordId":"{recordId}","selectedState":"ListView - Browse Cart Phase"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"customLwc","elementLabel":"Custom LWC-4","name":"Custom LWC","property":{"channelName":"cpqutils","customlwcname":"cpqFlexCardUtils","recordId":"{recordId}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"x-small","type":"bottom"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"cpqOfferSelection","Id":"a3gHp00000Isy3fQAC","vlocity_cmt__GlobalKey__c":"cpqOfferSelection/Vlocity/1/1632333560937"};
  export default definition