import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;
  metatg: MetaDefinition = {
    name: 'Nombre del Meta-Tag',
    content: ''
  };

  constructor( private _route: Router, private tgtitle: Title, private metaTag: Meta) {

    this.getArgument().subscribe( (data) => {console.log(data);
                                             this.titulo = data.titulo;
                                             this.tgtitle.setTitle( this.titulo );
                                             this.metatg.content = this.titulo;
                                             this.metaTag.updateTag( this.metatg);
                                            });

  }

  ngOnInit() {
  }

  getArgument() {
    return this._route.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data  )
);
  }

}
