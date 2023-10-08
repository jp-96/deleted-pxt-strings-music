namespace music {
    /**
     * strings melody to playable
     * @param melody array of string, csv
     * @returns Playable object
     */
    //% blockId="music_strings_playable"
    //% block="melody $melody"
    //% weight=83 blockGap=8
    //% duplicateShadowOnDrag
    //% group="Melody"
    export function stringsPlayable(melody: string[]): Playable {
        const notes: string[] = []
        for (const s of melody) {
            for (const note of s.split(",")) {
                notes.push(note.trim())
            }
        }
        return new StringArrayPlayable(notes, undefined);
    }
}
