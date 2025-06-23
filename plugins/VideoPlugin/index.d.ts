/// <reference types="react" />
import { LexicalCommand } from 'lexical';
export interface VideoData {
    url: string;
    id: string;
}
export declare const INSERT_VIDEO_COMMAND: LexicalCommand<VideoData>;
export default function VideoPlugin(): JSX.Element | null;
