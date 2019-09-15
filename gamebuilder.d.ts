//

import * as THREE from "three";

declare global {

    interface propsAreInbuild { [key: string]: any }
    const props: propsAreInbuild;

    type ActorRef = { comment: "actually a string", docHack: "else vscode hints 'string'" };

    function clone(original, pos?, rot?): ActorRef;

    function deltaTime(): number;

    function getActorsWithTag(tag: string): ActorRef[];
    function getActorGroupDescription(pattern: string): string;
    function getActorsInGroup(pattern: string): ActorRef[];
    //
    function getBoundsRadiusOuter(actor: ActorRef, includeVertical?: boolean): number;
    function getBoundsRadiusOuter(includeVertical?: boolean): number;
    //
    function getPointBehind(dist: number, actor?: ActorRef): THREE.Vector3;
    function getCardTargetActor(propName: string, actionMessage: any):
        ActorRef | null;
    function getThrottle(actor: ActorRef): THREE.Vector3;
    function getTimeSinceReset();
    function getVar(name: string, actor: ActorRef): any;
    function getVelocity(actor: ActorRef): THREE.Vector3;

    function isClone(actor?): boolean;

    function log(msg: string): void;
    function lookAt(targetActorOrPoint: ActorRef | THREE.Vector3,
        yawOnly?: boolean, maxRadians?: number): void;

    function propEnum(name: string, defaultValue: string, allowedValues: string[], options?);

    function send(actor: ActorRef, messageName: string, arg?: any): void;
    function setPos(worldPos: THREE.Vector3): void;
    function setVar(name: string, value: any): void;

    function turn(radians: number, axis?: THREE.Vector3): void;

    function vec3(x: number, y: number, z: number): THREE.Vector3;

    // new

    function propActorGroup(prop: string);
    function propNumber(prop: string, val: number);
    function getDisplayName(actor: ActorRef): string;
    function getActors(): ActorRef[];
    function getParent(actor?: ActorRef): ActorRef | null;
    function myself(): ActorRef;
    function detachFromParentPlease(actor: ActorRef): void;
    function setTintHex(colorHex: string): void;
    function propActor(prop: string): ActorRef;
    function overlapSphere(center: THREE.Vector3, radius: number): ActorRef;
    function detachFromParentPlease(actor: ActorRef): void;
}
