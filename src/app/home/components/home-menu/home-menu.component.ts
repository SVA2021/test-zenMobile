import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TaigaTabsT} from "@core/models";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home-menu',
    templateUrl: './home-menu.component.html',
    styleUrls: ['./home-menu.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMenuComponent implements OnInit {
    activeItemIndex = 0;

    tabs: TaigaTabsT[] = [
        {
            label: 'Home',
            value: '/home',
            icon: 'tuiIconHome'
        },
        {
            label: 'Inventory',
            value: '/inventory',
            icon: 'tuiIconTool'
        },
        {
            label: 'Reports',
            value: '/reports',
            icon: 'tuiIconFileText'
        },
        {
            label: 'Billing',
            value: '/billing',
            icon: 'tuiIconDollarSign'
        },
        {
            label: 'Profile',
            value: '/profile',
            icon: 'tuiIconUser'
        }
    ]

    constructor(
        private readonly router: Router
    ) {
    }

    ngOnInit(): void {
    }

    onClick(tab: TaigaTabsT) {
        this.router.navigate([tab.value]).then();
        this.activeItemIndex = this.tabs.indexOf(tab) ?? 0;
    }

}
