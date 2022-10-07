declare function clearScreen(): void;

declare function drawText(text: string, color: number, x: number, y: number): void;
declare function drawTextWrapped(text: string, color: number, x: number, y: number, width: number): void;

declare function drawBox(color: number, x: number, y: number, width: number, height: number): void;
declare function fillArea(symbol: string, color: number, x: number, y: number, width: number, height: number): void;

declare function saveData(data: string): void;
declare function loadData(): string;
