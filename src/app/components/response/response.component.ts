import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgEzClipboardService } from '@ngez/core';

@Component({
    selector: "response",
    templateUrl: "./response.component.html",
    styleUrls: ["./response.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponseComponent {
    @Input() response: any;

    constructor(
        private clipboard: NgEzClipboardService,
        private snackbar: MatSnackBar
    ) {}

    onCopy() {
        const didCopy = this.clipboard.copy(JSON.stringify(this.response));
        if (didCopy) this.snackbar.open("Copied!");
    }
}
