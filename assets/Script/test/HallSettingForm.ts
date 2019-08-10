import { UIFormLucenyType, UIFormShowMode, UIFormType } from "../UIFrame/config/SysDefine";
import UIType from "../UIFrame/UIType";
import BaseUIForm from "../UIFrame/BaseUIForm";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallSettingForm extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.PopUp, UIFormShowMode.Normal, UIFormLucenyType.ImPenetrable);
    ClickMaskClose = false;


    @property(cc.Node)
    CloseNode: cc.Node= null;


    startPosition: cc.Vec2;

    init(obj: any) {
        
        this.startPosition = this.node.convertToNodeSpace(obj.startPosition);
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.CloseNode.on('click', () => {
            this.CloseUIForm();
        }, this)
    }

    ShowPopUpAnimation(callBack: Function) {
        this.node.scale = 0;
        this.node.setPosition(this.startPosition);
        cc.tween(this.node)
        .to(0.3, {scale:1, position:cc.v2(0,0)})
        .call(() => {
            // 显示mask
            callBack();
        })
        .start();
    }

    // update (dt) {}
}
