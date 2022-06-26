import { Component, OnInit } from "@angular/core";
import { Movies } from "src/app/shared/Movies";

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  moviesNames: any = ''
  moviesList: any = ''
  currentPage: number = 0

  constructor(private movies: Movies) { }

  ngOnInit(): void {
    this.moviesNames = this.movies.getName()
    this.moviesNames.sort()
    console.log(this.moviesNames)
    this.showPage(this.currentPage)
  }

  showPage(page: number | string): void {
    switch (page) {
      case 1:
        this.moviesList = this.moviesNames.slice(100, 199)
        this.currentPage = 1
        break
      case 2:
        this.moviesList = this.moviesNames.slice(200, 299)
        this.currentPage = 2
        break
      case 3:
        this.moviesList = this.moviesNames.slice(300, 399)
        this.currentPage = 3
        break
      case "Next":
        this.currentPage += 1
        if (this.moviesList != '') {
          const fromList = this.currentPage * 100
          const toList = this.currentPage * 100 + 99
          console.log(fromList)
          console.log(toList)
          this.moviesList = this.moviesNames.slice(fromList, toList)
        }
        break
      case "Previous":
        if (this.currentPage > 0) {
          this.currentPage -= 1
          const fromListP = this.currentPage * 100
          const toListP = this.currentPage * 100 + 99
          console.log(fromListP)
          console.log(toListP)
          this.moviesList = this.moviesNames.slice(fromListP, toListP)
        }
        break
      default:
        this.moviesList = this.moviesNames.slice(0, 99)
    }
  }

}