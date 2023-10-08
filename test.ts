// tests go here; this will not be compiled when this package is used as an extension.
let silent_night = [
    "G4:6, A:2, G:4,   E:12",
    "G:6, A:2, G:4,    E:12",
    "D5:8, D:4,        B4:12",
    "C5:8, C:4,        G4:12",
    "A:8, A:4 ,        C5:6, B4:2, A:4",
    "G4:6, A:2, G:4,   E:12",
    "A:8, A:4,         C5:6, B4:2, A:4",
    "G:6, A:2, G:4,    E:12",
    "D5:8, D:4,        F5:6, D:2, B4:4",
    "C5:12,            E5:12",
    "C5:6, G4:2, E:4,  G:6, F:2, D:4",
    "C:12,             C:4, R:4, R:4"
    ]
    basic.forever(function () {
        music.play(music.stringsPlayable(silent_night), music.PlaybackMode.UntilDone)
    })
    