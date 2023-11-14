import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {fakeUser, UserT} from "@core/models";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    public user: UserT | null = null;

    constructor() {
    }

    ngOnInit(): void {
        this.user = fakeUser;
    }

}
