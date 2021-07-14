import React, { Component, MouseEvent } from "react";
import Child from "./Child";

interface IParentProps{

}

interface IParentState{

}


export default class Parent extends Component<IParentProps,IParentState>{

    private childObject:React.RefObject<Child>;

    constructor(props:IParentProps){
        super(props);

        this.childObject= React.createRef<Child>()
    }

    private OnShowModalPopUp=(event:MouseEvent):void=>{
        console.log("Parent: Show Modal PopUp");
        this.childObject.current?.ShowModalPopUp();
        //event.preventDefault();
        
    }

    public render(){
        return (

            <React.Fragment>
                <button className="btn btn-dark" onClick={this.OnShowModalPopUp}>Show Modal Popup</button>

                <Child ref={this.childObject}></Child>
            </React.Fragment>

        )
    }
}