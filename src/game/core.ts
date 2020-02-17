import * as PIXI from 'pixi.js';
import { config } from 'Game/config';

export class core {
    private renderer: PIXI.Application;
    private gameGrid: PIXI.Container;

    constructor(private viewElement: HTMLElement){
        this.renderer = new PIXI.Application({ resizeTo: window , backgroundColor: config.backgroundColor });
        this.gameGrid = new PIXI.Container();
        viewElement.appendChild( this.renderer.view );
        this.renderer.stage.addChild(this.gameGrid);
    }
}