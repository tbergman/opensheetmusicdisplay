import { GraphicalMusicPage } from "../Graphical/GraphicalMusicPage";
import { MusicSystem } from "../Graphical/MusicSystem";
import { Staff } from "../VoiceData/Staff";
import { StaffLine } from "../Graphical/StaffLine";
import { SourceMeasure } from "../VoiceData/SourceMeasure";
import { StaffMeasure } from "../Graphical/StaffMeasure";
import { SourceStaffEntry } from "../VoiceData/SourceStaffEntry";
import { GraphicalStaffEntry } from "../Graphical/GraphicalStaffEntry";
import { Note } from "../VoiceData/Note";
import { ClefInstruction } from "../VoiceData/Instructions/ClefInstruction";
import { OctaveEnum } from "../VoiceData/Expressions/ContinuousExpressions/octaveShift";
import { GraphicalNote } from "../Graphical/GraphicalNote";
import { Pitch } from "../../Common/DataObjects/pitch";
import { TechnicalInstruction } from "../VoiceData/Instructions/TechnicalInstruction";
export interface IGraphicalSymbolFactory {
    createMusicSystem(page: GraphicalMusicPage, systemIndex: number): MusicSystem;
    createStaffLine(parentSystem: MusicSystem, parentStaff: Staff): StaffLine;
    createStaffMeasure(sourceMeasure: SourceMeasure, staff: Staff): StaffMeasure;
    createExtraStaffMeasure(staffLine: StaffLine): StaffMeasure;
    createStaffEntry(sourceStaffEntry: SourceStaffEntry, measure: StaffMeasure): GraphicalStaffEntry;
    createGraceStaffEntry(staffEntryParent: GraphicalStaffEntry, measure: StaffMeasure): GraphicalStaffEntry;
    createNote(note: Note, numberOfDots: number, graphicalStaffEntry: GraphicalStaffEntry, activeClef: ClefInstruction, octaveShift: OctaveEnum): GraphicalNote;
    createGraceNote(note: Note, numberOfDots: number, graphicalStaffEntry: GraphicalStaffEntry, activeClef: ClefInstruction, octaveShift: OctaveEnum): GraphicalNote;
    addGraphicalAccidental(graphicalNote: GraphicalNote, pitch: Pitch, grace: boolean, graceScalingFactor: number): void;
    addFermataAtTiedEndNote(tiedNote: Note, graphicalStaffEntry: GraphicalStaffEntry): void;
    createGraphicalTechnicalInstruction(technicalInstruction: TechnicalInstruction, graphicalStaffEntry: GraphicalStaffEntry): void;
    createInStaffClef(graphicalStaffEntry: GraphicalStaffEntry, clefInstruction: ClefInstruction): void;
    createChordSymbol(sourceStaffEntry: SourceStaffEntry, graphicalStaffEntry: GraphicalStaffEntry, transposeHalftones: number): void;
}
