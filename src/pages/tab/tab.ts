import { Component } from "@angular/core";
import { HomePage } from "../home/home";
import { Phonebook } from "../phonebook/phonebook";
import { Diary } from "../diary/diary";
@Component({
    templateUrl : 'tab.html'
})

export class TabsPage{
    tab1Root = HomePage;
    tab2Root = Phonebook;
    tab3Root = Diary;
}