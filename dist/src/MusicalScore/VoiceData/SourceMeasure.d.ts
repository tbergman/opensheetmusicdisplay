import { Fraction } from "../../Common/DataObjects/fraction";
import { VerticalSourceStaffEntryContainer } from "./VerticalSourceStaffEntryContainer";
import { SourceStaffEntry } from "./SourceStaffEntry";
import { RepetitionInstruction } from "./Instructions/RepetitionInstruction";
import { Staff } from "./Staff";
import { VoiceEntry } from "./VoiceEntry";
import { Voice } from "./Voice";
import { MusicSheet } from "../MusicSheet";
import { MultiExpression } from "./Expressions/multiExpression";
import { MultiTempoExpression } from "./Expressions/multiTempoExpression";
import { KeyInstruction } from "./Instructions/KeyInstruction";
export declare class SourceMeasure {
    constructor(completeNumberOfStaves: number);
    measureListIndex: number;
    endsPiece: boolean;
    private measureNumber;
    private absoluteTimestamp;
    private completeNumberOfStaves;
    private duration;
    private staffLinkedExpressions;
    private tempoExpressions;
    private verticalSourceStaffEntryContainers;
    private implicitMeasure;
    private breakSystemAfter;
    private staffMeasureErrors;
    private firstInstructionsStaffEntries;
    private lastInstructionsStaffEntries;
    private firstRepetitionInstructions;
    private lastRepetitionInstructions;
    MeasureNumber: number;
    AbsoluteTimestamp: Fraction;
    readonly CompleteNumberOfStaves: number;
    Duration: Fraction;
    ImplicitMeasure: boolean;
    BreakSystemAfter: boolean;
    readonly StaffLinkedExpressions: MultiExpression[][];
    readonly TempoExpressions: MultiTempoExpression[];
    readonly VerticalSourceStaffEntryContainers: VerticalSourceStaffEntryContainer[];
    readonly FirstInstructionsStaffEntries: SourceStaffEntry[];
    readonly LastInstructionsStaffEntries: SourceStaffEntry[];
    readonly FirstRepetitionInstructions: RepetitionInstruction[];
    readonly LastRepetitionInstructions: RepetitionInstruction[];
    getErrorInMeasure(staffIndex: number): boolean;
    setErrorInStaffMeasure(staffIndex: number, hasError: boolean): void;
    getNextMeasure(measures: SourceMeasure[]): SourceMeasure;
    getPreviousMeasure(measures: SourceMeasure[]): SourceMeasure;
    findOrCreateStaffEntry(inMeasureTimestamp: Fraction, inSourceMeasureStaffIndex: number, staff: Staff): {
        createdNewContainer: boolean;
        staffEntry: SourceStaffEntry;
    };
    findOrCreateVoiceEntry(sse: SourceStaffEntry, voice: Voice): {
        createdVoiceEntry: boolean;
        voiceEntry: VoiceEntry;
    };
    getPreviousSourceStaffEntryFromIndex(verticalIndex: number, horizontalIndex: number): SourceStaffEntry;
    getVerticalContainerIndexByTimestamp(musicTimestamp: Fraction): number;
    getVerticalContainerByTimestamp(musicTimestamp: Fraction): VerticalSourceStaffEntryContainer;
    checkForEmptyVerticalContainer(index: number): void;
    reverseCheck(musicSheet: MusicSheet, maxInstDuration: Fraction): Fraction;
    calculateInstrumentsDuration(musicSheet: MusicSheet, instrumentMaxTieNoteFractions: Fraction[]): Fraction[];
    getEntriesPerStaff(staffIndex: number): SourceStaffEntry[];
    hasBeginInstructions(): boolean;
    beginsWithLineRepetition(): boolean;
    endsWithLineRepetition(): boolean;
    beginsWithWordRepetition(): boolean;
    endsWithWordRepetition(): boolean;
    getKeyInstruction(staffIndex: number): KeyInstruction;
    private getLastSourceStaffEntryForInstrument(instrumentIndex);
}