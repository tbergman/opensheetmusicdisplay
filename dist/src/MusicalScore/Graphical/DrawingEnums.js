"use strict";
(function (OutlineAndFillStyleEnum) {
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["BaseWritingColor"] = 0] = "BaseWritingColor";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["FollowingCursor"] = 1] = "FollowingCursor";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["AlternativeFollowingCursor"] = 2] = "AlternativeFollowingCursor";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["PlaybackCursor"] = 3] = "PlaybackCursor";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Highlighted"] = 4] = "Highlighted";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["ErrorUnderlay"] = 5] = "ErrorUnderlay";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Selected"] = 6] = "Selected";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["SelectionSymbol"] = 7] = "SelectionSymbol";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["DebugColor1"] = 8] = "DebugColor1";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["DebugColor2"] = 9] = "DebugColor2";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["DebugColor3"] = 10] = "DebugColor3";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["SplitScreenDivision"] = 11] = "SplitScreenDivision";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["GreyTransparentOverlay"] = 12] = "GreyTransparentOverlay";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["MarkedArea1"] = 13] = "MarkedArea1";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["MarkedArea2"] = 14] = "MarkedArea2";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["MarkedArea3"] = 15] = "MarkedArea3";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["MarkedArea4"] = 16] = "MarkedArea4";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["MarkedArea5"] = 17] = "MarkedArea5";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["MarkedArea6"] = 18] = "MarkedArea6";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["MarkedArea7"] = 19] = "MarkedArea7";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["MarkedArea8"] = 20] = "MarkedArea8";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["MarkedArea9"] = 21] = "MarkedArea9";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["MarkedArea10"] = 22] = "MarkedArea10";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Comment1"] = 23] = "Comment1";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Comment2"] = 24] = "Comment2";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Comment3"] = 25] = "Comment3";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Comment4"] = 26] = "Comment4";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Comment5"] = 27] = "Comment5";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Comment6"] = 28] = "Comment6";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Comment7"] = 29] = "Comment7";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Comment8"] = 30] = "Comment8";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Comment9"] = 31] = "Comment9";
    OutlineAndFillStyleEnum[OutlineAndFillStyleEnum["Comment10"] = 32] = "Comment10";
})(exports.OutlineAndFillStyleEnum || (exports.OutlineAndFillStyleEnum = {}));
var OutlineAndFillStyleEnum = exports.OutlineAndFillStyleEnum;
(function (StyleSets) {
    StyleSets[StyleSets["MarkedArea"] = 0] = "MarkedArea";
    StyleSets[StyleSets["Comment"] = 1] = "Comment";
})(exports.StyleSets || (exports.StyleSets = {}));
var StyleSets = exports.StyleSets;
(function (GraphicalLayers) {
    GraphicalLayers[GraphicalLayers["Background"] = 0] = "Background";
    GraphicalLayers[GraphicalLayers["Highlight"] = 1] = "Highlight";
    GraphicalLayers[GraphicalLayers["MeasureError"] = 2] = "MeasureError";
    GraphicalLayers[GraphicalLayers["SelectionSymbol"] = 3] = "SelectionSymbol";
    GraphicalLayers[GraphicalLayers["Cursor"] = 4] = "Cursor";
    GraphicalLayers[GraphicalLayers["PSI_Debug"] = 5] = "PSI_Debug";
    GraphicalLayers[GraphicalLayers["Notes"] = 6] = "Notes";
    GraphicalLayers[GraphicalLayers["Comment"] = 7] = "Comment";
    GraphicalLayers[GraphicalLayers["Debug_above"] = 8] = "Debug_above";
})(exports.GraphicalLayers || (exports.GraphicalLayers = {}));
var GraphicalLayers = exports.GraphicalLayers;
(function (NoteState) {
    NoteState[NoteState["Normal"] = 0] = "Normal";
    NoteState[NoteState["Selected"] = 1] = "Selected";
    NoteState[NoteState["Follow_Confirmed"] = 2] = "Follow_Confirmed";
    NoteState[NoteState["QFeedback_NotFound"] = 3] = "QFeedback_NotFound";
    NoteState[NoteState["QFeedback_OK"] = 4] = "QFeedback_OK";
    NoteState[NoteState["QFeedback_Perfect"] = 5] = "QFeedback_Perfect";
    NoteState[NoteState["Debug1"] = 6] = "Debug1";
    NoteState[NoteState["Debug2"] = 7] = "Debug2";
    NoteState[NoteState["Debug3"] = 8] = "Debug3";
})(exports.NoteState || (exports.NoteState = {}));
var NoteState = exports.NoteState;
