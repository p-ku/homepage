import './home-page.js';
import './bender-demo.js';
import './contact-form.js';
import { LitElement, html, css, property } from 'lit-element'; // https://lit-element.polymer-project.org/

export class WebSite extends LitElement {
  @property({ type: Boolean }) english = true;
  @property({ type: String }) currentPage = '/';
  @property({ type: String }) lang = '';

  @property({ type: Boolean }) isOpen = false;

  constructor() {
    super();
    this.currentPage = location.pathname.replace('https://p-ku.com', '');
  }

  switchPage(destination = '/') {
    this.currentPage = this.lang.concat(destination);
  }
  switchLanguage() {
    this.english = !this.english;
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 0 auto;
      text-align: center;
      flex-grow: 1;
      background-color: #fffde8;
      font-size: calc(10px + 2vmin);
      font-weight: 700;
      animation: fade-in-animation 0.5s;
    }
    @keyframes fade-in-animation {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    #outlet,
    #outlet :only-child {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      width: 100%;
      height: 100%;
      align-self: stretch;
    }

    a::selection {
      color: #fffde8;
      background-color: #ef8127;
    }

    #navbar,
    #navright,
    #navleft,
    #navcenter {
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      min-height: 64px;
      height: 2.5em;
      white-space: nowrap;
    }

    #navbar {
      background-image: linear-gradient(-45deg, #321e00, #683e00);
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
      min-width: 100%;
      width: 100%;
      justify-content: space-between;
    }

    #navbar * a {
      display: flex;
      height: 100%;
      align-items: center;
      text-decoration: none;
      box-sizing: border-box;
      justify-content: center;
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10+ and Edge */
      user-select: none; /* Standard syntax */
      outline: none;
    }

    #navbar .linkspace {
      height: 100%;
    }

    #navbar * a::selection,
    #navbar span::selection,
    #navbar div::selection {
      background: transparent;
      outline: none;
    }

    #navleft,
    #navright {
      flex: 0.4 1 auto;
    }

    #navcenter {
      flex: 1 1 auto;
      flex-direction: column;
      justify-content: flex-end;
    }

    .home {
      font-size: max(1.5em, 38.4px);
      color: #ffc342;
      text-decoration: none;
    }

    #demobar {
      display: flex;
      color: #dfabf4;
      border: solid #dfabf4 max(4px, 0.15em);
      border-bottom: none;
      border-radius: 1em 1em 0 0;
      height: 55%;
      font-size: max(25.5px, 1em);
      max-width: 960px;
      width: 12vw;
    }

    #demobar a {
      justify-content: center;
      box-sizing: border-box;
      color: #dfabf4;
      width: 100%;
      min-width: max-content;
      border-bottom: solid #00000000 max(4px, 0.15em);
      border-top: solid #00000000 max(4px, 0.15em);
    }

    #demobar a.chosen {
      color: #fffde8;
      border-bottom: dashed #dfabf4 max(4px, 0.15em);
    }

    .linkspace {
      display: flex;
      min-width: max(4.7em, 120.32px);
      justify-content: center;
      flex: 1 1 2.5em;
    }

    .linktext {
      display: flex;
      opacity: 0;
      width: min-content;
      color: #fffde8;
      text-decoration: none;
      pointer-events: none;
      justify-content: flex-end;
      max-width: 0;
      overflow: hidden;
      font-size: max(16px, 1em);
    }

    #mail,
    .source,
    #jpen {
      color: #ffc342;
      box-sizing: content-box;
      text-decoration: none;
      width: 100%;
      flex: 1 1 max(5em, 128px);
    }
    .source {
      color: #9df5ee;
    }
    .blog {
      color: #dfabf4;
      font-size: max(16px, 0.6em);
      margin-left: 6vw;
    }

    #jpen {
      color: #eb737b;
    }

    #mail.chosen div {
      width: 85%;
    }
    #mail.chosen .linktext {
      animation: reveal 0.08s ease-out forwards;
      opacity: 1;
      color: #ffc342;
    }
    #mail.chosen #mailcircle {
      color: #ffc342;
    }

    #jpencircle,
    #mailcircle,
    #sourcecircle {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      text-align: center;
      box-sizing: border-box;
      border: solid 0.25em;
      border-radius: 2.5em;
      width: 2.5em;
      height: 2.5em;
      background-color: red;
      background-color: #00000000;
      min-height: 2.5em;
      min-width: 2.5em;
      margin: 0 auto;
      overflow: hidden;
      font-size: max(16px, 0.6em);
    }

    #risingsun {
      display: flex;
      flex-direction: column;
      height: max(2.5em, 64px);
      justify-content: center;
      align-content: center;
      align-items: center;
      text-align: center;
      vertical-align: center;
    }

    #jpabb {
      display: flex;
      flex: 1 0 auto;
      justify-content: center;
      align-content: center;
      align-items: center;
      text-align: center;
      vertical-align: center;
      color: #eb737b;
    }

    #risingsun .linktext {
      display: flex;
      font-size: max(16px, 1em);
      color: #fffde8;
      text-decoration: none;
      pointer-events: none;
      justify-content: center;
      text-align: center;
      align-content: center;
      align-items: center;
      overflow: hidden;
      width: 100%;
      opacity: 1;
      flex: 0 1 0;
      font-weight: 900;
    }

    #jpencircle.jp {
      color: #fffde8;
      background-color: #ef3341;
      border-color: #fffde8;
    }

    #jpencircle.jp * #jpabb {
      flex: 0 1 0;
      min-height: 0;
      opacity: 1;
    }
    #jpencircle.jp * .linktext {
      flex: 1 0 2.5em;
      max-width: 100%;
    }

    #burger,
    .closed {
      display: none;
    }

    @keyframes reveal {
      from {
        max-width: 0;
      }
      to {
        max-width: 75%;
      }
    }
    @media (hover: hover) {
      #mail:hover .linktext,
      .source:hover .linktext {
        animation: reveal 0.07s ease-out forwards;
        opacity: 1;
      }

      .linkspace:hover #jpabb {
        transition: 0.06s ease-out;
        /*         -webkit-transition: opacity 0.06s ease-out;
        -moz-transition: opacity 0.06s ease-out;
        -o-transition: opacity 0.06s ease-out; */
        flex: 0 1 0;
        min-height: 0;
        opacity: 1;
      }
      .linkspace:hover #risingsun > .linktext {
        flex: 1 0 2.5em;
        transition: 0.06s ease-out;
        /*         -webkit-transition: opacity 0.06s ease-out;
        -moz-transition: opacity 0.06s ease-out;
        -o-transition: opacity 0.06s ease-out; */
        opacity: 1;
        max-width: 100%;
      }
      .linkspace:hover #mailcircle,
      .linkspace:hover #sourcecircle {
        width: 85%;
        transition: 0.06s ease-out;
        /*         -webkit-transition: opacity 0.06s ease-out;
        -moz-transition: opacity 0.06s ease-out;
        -o-transition: opacity 0.06s ease-out; */
      }

      .linkspace:hover #mail.chosen #mailcircle {
        transition: none;
      }

      #demobar a:hover,
      .blog:hover {
        color: #fffde8;
      }

      .home:hover {
        color: #ffdb49;
      }
    }

    @media screen and (max-width: 869px) {
      #navright {
        flex: none;
      }
      #navleft {
        flex-grow: 1;
      }

      #navcenter,
      .linkspace,
      .linktext {
        display: none;
      }

      #burger {
        color: #fffde8;
        font-size: 32px;
        width: 64px;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      #jpencircle,
      #mailcircle,
      #sourcecircle {
        height: 32px;
        width: 32px;
      }

      .linkspace:last-child {
        display: block;
        width: 64px;
        min-width: 64px;
        flex: none;
        justify-self: center;
        align-content: center;
        align-self: center;
        text-align: center;
      }

      .linktext {
        opacity: 1;
      }

      .demotitle {
        position: absolute;
        top: 8%;
        left: 1%;
        transform: rotate(-35deg);
      }

      .open {
        background-image: linear-gradient(315deg, #321e00, #683e00);
        display: flex;
        flex-direction: row;
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
        position: absolute;
        top: max(2.5em, 64px);
        left: 0;
        width: 100%;
        height: max(5em, 128px);
        align-self: center;
        text-align: center;
        align-content: center;
        align-items: center;
        justify-content: center;
        min-height: 128px;
        z-index: 1;
      }
      #burgerdemo,
      #burgerlink {
        display: flex;
        flex-direction: column;
        height: 100%;
        flex: 1 1 50vw;
      }

      #burgerdemo {
        flex: 1 1 50vw;
        border-radius: 0 2em 0 0;
        background-image: radial-gradient(
          farthest-corner at top left,
          #fffde8,
          #dfabf4
        );
      }

      #burgerdemo a {
        display: flex;
        color: #af4ebd;
        border: none;
        min-height: 64px;
        text-align: center;
        justify-content: flex-end;
        align-content: center;
        margin-right: 1.5vmin;
        font-size: 1.5em;
      }

      .burgerspace {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        align-items: flex-end;
        align-content: flex-end;
        text-align: center;
        border: none;
        border-bottom: none;
        border-top: none;
      }

      .buttonspace {
        display: flex;
        text-align: center;
        align-self: center;
        text-align: center;
        align-content: center;
        align-items: center;
        justify-content: center;
        width: max(2.5em, 64px);
        height: max(2.5em, 64px);
      }
      #burgerdemo a > .buttonspace {
        width: max(1.25em, 32px);
      }
      .burgertext {
        flex-grow: 1;
        text-align: right;
        color: #fffde8;
      }

      .burgertext.chosen {
        color: #ffc342;
      }

      .chosen #mailcircle {
        background-color: #ffc342;
      }
      .burgermail {
        color: #ffc342;
      }

      .burgersource {
        color: #9df5ee;
      }

      #demobar {
        display: none;
      }
    }
  `;

  render() {
    return html`

      <div id="navbar">
        <div id="burger" @click=${() => {
          this.isOpen = !this.isOpen;
        }}>≡</div>
          <div class=${this.isOpen ? 'open closed' : 'closed'}
              @click=${() => {
                if (this.isOpen) {
                  this.isOpen = !this.isOpen;
                }
              }}>
            <div id="burgerdemo">
                            <a
                class=${this.currentPage.endsWith('bender') ? 'chosen' : ''}
                @click=${() => this.switchPage('/bender')}
                >${
                  this.english ? 'demo' : 'デモ'
                }<span class="buttonspace"></span></a
              >
            <a
            id='burgerblog'
            href="https://blog.p-ku.com"
                target="_blank"
                >${
                  this.english ? 'blog⤴' : 'ブログ⤴'
                }<span class="buttonspace"></span></a
              >


            </div>                      
            <div id="burgerlink">
              <a class="burgerspace"           
                @click=${() => this.switchPage('/contact')}>
<span class=${
      this.currentPage.endsWith('contact') ? 'burgertext chosen' : 'burgertext'
    }
  >${
    this.english ? 'contact' : 'コンタクト'
  }</span><span class="buttonspace"><span id="mailcircle"  class=${
      this.currentPage.endsWith('contact') ? 'burgermail chosen' : 'burgermail'
    }>➤</span></span>
  </a><a class="burgerspace" href="https://github.com/p-ku"
                target="_blank">
              
  <span class='burgertext' 
>github⤴</span>            <span class="buttonspace"><span id="sourcecircle" class="burgersource">＜＞</span></span>
  </a>

             </div>
          </div>
        <div id="navleft" @click=${() => {
          if (this.isOpen) {
            this.isOpen = !this.isOpen;
          }
        }}>

            <a
              class="home"
              @click=${() => {
                this.switchPage('/');
              }}
              >ピ-クu</a
            >
          </div>
          <div id="navcenter">
                 <a
                class="blog"
                href="https://blog.p-ku.com"
                target="_blank"
                @click=${() => {
                  if (this.isOpen) {
                    this.isOpen = !this.isOpen;
                  }
                }}
                ><span class='linktext'                 
              ></span>${this.english ? 'blog⤴' : 'ブログ⤴'}</a
              >
            <div id="demobar">
              <a
                class=${this.currentPage.endsWith('bender') ? 'chosen' : ''}
                @click=${() => this.switchPage('/bender')}
                >${this.english ? 'demo' : 'デモ'}</a
              >
            </div>
       
          </div>   
              
        
          <div id="navright">

            <div class="linkspace">
              <a
                class="source"
                href="https://github.com/p-ku"
                target="_blank"
                @click=${() => {
                  if (this.isOpen) {
                    this.isOpen = !this.isOpen;
                  }
                }}
                ><div id="sourcecircle">＜<span class='linktext'                 
              >github⤴</span>＞</div></a
              >
              </div>
              <div class="linkspace">
              <a
              id="mail"
                class=${
                  this.currentPage.endsWith('contact') ? 'mail chosen' : 'mail'
                }
                @click=${() => {
                  this.switchPage('/contact');
                  if (this.isOpen) {
                    this.isOpen = !this.isOpen;
                  }
                }}
                ><div id="mailcircle"><span class='linktext'                 
              >${this.english ? 'contact' : 'コンタクト'}</span>➤</div></a
              >
              </div>
              <div class="linkspace">
                <a
                id="jpen"
                  @click=${() => {
                    this.switchLanguage();
                  }}
                  ><div id="jpencircle" class=${
                    this.english ? 'en' : 'jp'
                  }><div id="risingsun"><span id="jpabb">JP</span><span class='linktext'>日</span></div></div></a
                >
              </div>
            </div>
          </div>

        <div
          id="outlet"
          @click=${() => {
            if (this.isOpen) {
              this.isOpen = !this.isOpen;
            }
          }}
        >
             ${
               this.currentPage.endsWith('bender')
                 ? html`<bender-demo ?english=${this.english}></bender-demo>`
                 : this.currentPage.endsWith('contact')
                 ? html`<contact-form ?english=${this.english}></contact-form>`
                 : html`<home-page ?english=${this.english}></home-page>`
             }

        </div>
      </div>

    `;
  }
}
