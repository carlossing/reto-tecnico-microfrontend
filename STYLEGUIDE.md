# Genia Angular Style Guide

## Table of Contents

1. [HTML-Wrapping](#html-wrapping)
2. [Comments](#comments)
3. [Avoid ANY](#avoid-any)
4. [Optional chaining operator](#optional-chaining-operator)
5. [Use ng-container](#use-ng-container)
6. [Use name boolean](#use-name-boolean)
7. [Use property value shorthand](#use-property-value-shorthand)
8. [Use button css global](#use-button-css-global)
9. [Use destructuring](#use-destructuring)
10. [Use pure functions](#use-pure-functions)
11. [Use enum](#use-enum)
12. [Use Presentational and smart or container components](#use-presentational-and-smart-or-container-components)
13. [Ordering the class members (including getters and lifecycle hooks)](#ordering-the-class-members)
14. [Postfix observables with $](#postfix-observables-width-$)
15. [Avoid manual subscriptions and asynchronous property assignment](#avoid-manual-subscriptions-and-asynchronous)

## HTML-Wrapping - Component
I suggest defining a specific order:

1. Structural directives
2. Animations
3. Static properties
4. Dynamic properties
5. Events

- HTML

```
// bad
<input *ngIf="isVisible" (change)="onInputChange($event)" [ngClass]="{'new-class': true}" class="form-control">

// bad
<input
  (change)="onInputChange($event)"
  [ngClass]="{'new-class': true}"
  *ngIf="isVisible"
  class="form-control"
>

// good
<input
  *ngIf="isVisible"
  class="form-control"
  [ngClass]="{'new-class': true}"
  (change)="onInputChange($event)"
>
```

- Component

```
// bad
<header *ngIf="isVisible" (change)="onInputChange($event)" [ngClass]="{'new-class': true}" class="form-control"></header>

// bad
<header
  (change)="onInputChange($event)"
  [ngClass]="{'new-class': true}"
  *ngIf="isVisible"
  class="form-control"
></header>

// good
<header
  *ngIf="isVisible"
  class="form-control"
  [ngClass]="{'new-class': true}"
  (change)="onInputChange($event)"
>
</header>
```

## Comments
Install extension: Better Comments:

1. // * Important information is highlighted
2. // ! Deprecated method, do not use
3. // ? Should this method be exposed in the public API?
4. // TODO: refactor this method so that it conforms to the API
5. // FIXME: some fix


```
// bad
// is a new comment important

// good
// * is a new comment important
// TODO: apply refactor
/*
 * TODO: apply refactor
*/
```

## Avoid ANY
Install extension: Better Comments

```
// bad
age: any;
person: any;

// good
age: number;
person: Person;
```

## Optional chaining operator
```
// bad
<div *ngIf="user && user.loggedIn"></div>

// good
<div *ngIf="user?.loggedIn"></div>
```

## Use name boolean

```
// bad
processing = true;
child = false;

// good
isProcessing = true;
hasChild = false;
```

## Use property value shorthand

```
const variableName = 'value';

// bad
const obj = {
  variableName: variableName,
};

// good
const obj = {
  variableName,
};
```

## Use button css global

libs\shared\styles\src\lib\components\_button.scss
- btn-primary-nsx: purple
- btn-outline-secondary-nsx: transparent
- btn-nsx-secondary: blue
```
<button class="btn btn-outline-secondary-nsx">
  Cancelar
</button>
```

## Use desestructuring
```
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;

```

## Use pure functions

```
a = 2;

// bad
suma(b) {
  return a + b;
}

// good
suma(a, b) {
  return a + b;
};
```

## Use enum

```
// bad
const value = feederStatus === '01';

// good
- Create file enum
export enum FeederStatus {
  ACTIVE = '01'
}

const value = feederStatus === FeederStatus.ACTIVE;
```

## Use Presentational and smart or container components

```
Presentational (dumb)
in charge of displaying the data which is passed down to them
should not make use of services
pass events up instead of doing complex things with them
use changeDetection: ChangeDetectionStrategy.OnPush in the @Component declaration

Container (smart)
use multiple (if necessary) other components
serve data to presentational components
handle events from child components
control UX flow
work with services to make things happen (fetch, store, change state)
can be loaded directly or lazily when routing
use changeDetection: ChangeDetectionStrategy.OnPush and pass data down using the async pipe

ChangeDetectionStrategy.OnPush - Will update the view only in specific scenarios:
* When an event is triggered.
* When the input value changes.

ChangeDetectionStrategy.Default: Always updating the view.

url reference: [blog angular](#https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/)

```

## Ordering the class members (including getters and lifecycle hooks)

```
1. @ViewChild
2. @Inputs
3. @Outputs
4. Properties
5. Getters and setters
6. Constructor
7. Lifecycle hooks
8. Methods
9. ngOnDestroy

Example:

class MyComponent implements OnInit, OnChanges {
  @Viewchild()

  @Input() i1: string;
  @Input() i2: string;
  @Output() o2: EventEmitter<string> = new EventEmitter();

  attr1: number;
  protected attr2: string;
  private attr3: Date;

  get computedProp(): string { ... }
  private get secretComputedProp(): number { ... }

  constructor(...) { ... }

  ngOnInit(): void { ... }

  ngOnChanges(): void { ... }

  onSomeButtonClick(event: MouseEvent): void { ... }

  private someInternalAction(): void { ... }

  ngOnDestroy(): void { ... }
}
```

## Postfix observables with $

```
// bad
const observable: Observable;

// good
const observable$: Observable;
const observable$: BehaviorSubject...;

// good
const mySubject$: Subject...;
```

## Avoid manual subscriptions and asynchronous property assignment

```
// bad
@Component(...)
export class ArticlesList {
  public articles: Array<Article>;

  constructor(...) {
    this.articleService.fetchArticles().subscribe((articles) => { // manual subscription
      this.articles = articles; // asynchronous property assignment
    });
  }
}

Template
<!-- bad -->
<my-app-article-details
  *ngFor="let article of articles"
  [article]="article"
></my-app-article-details>

```

```
// good
@Component(...)
export class ArticlesList {
  public readonly articles$: Observable<Array<Article>> = this.articleService.fetchArticles();

  constructor(...) { }
}

<!-- good -->
<my-app-article-details
  *ngFor="let article of articles$ | async"
  [article]="article"
></my-app-article-details>

```

```
// good
@Component({
  template: `
  <ng-container *ngIf="user$ | async as user">
    {{ user.name }}
  </ng-container>
  `,
  ...
})
class MyComponent {
  user$: Observable<UserModel> = this.route.params.pipe(switchMap((params: Params) => {
    return this.usersService.fetchById(params.userId);
  }));

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
  ) {}
}

// best
@Component(...)
class MyComponent {
  public user$: Observable<UserModel> = this.createUserObservable();

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
  ) {}

  private createUserObservable(): Observable<UserModel> {
    return this.route.params.pipe(switchMap((params: Params) => {
      return this.usersService.fetchById(params.userId);
    }));
  }
}
```
