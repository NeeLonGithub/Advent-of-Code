let input = [
    '[<(<<([[[{<[{[[]()](<>())}<{()[]}<[]<>>>](<[()[]][()()]>)>[{{(()())(<>())}({()[]}{{}{}})}[(',
    '{{{(({[<<[{[(<()()>[<>{}])<<()()>[[]]>]{{<(){}>{()[]}}([()<>]<<>{}>)}}([[<[][]>({}{})]<({}[])',
    '<[[[(<[{{{(<({()<>)([][]))(<{}()>{[][]})>{[[{}()][[][]]]({{}[]}[()()])})}[{<([()()]{()<>}){([]',
    '[{[(<<{({{<<<{<>[]}{{}}>[({}<>){<>}]>[<<{}()>{<>[]}>[(()())({}())]]>}}({[(<({}{})<<>{}>>{<()()><[',
    '{{[{<<{[<{([({[]{}})])}>]}>><<<[[[<[([<>{}])<{[]{}}(<><>))]>]]({([{(<>())(()[])}<<()<>>>]<',
    '((<<{<[{[((<([()[]])<{<>{}}>>((<{}[]><(){}>)[<()<>>(<>())])}[<{<()[]>{()()}}>])]([{<{<()[]>({}<>)}>}]{',
    '{<[<<({{<<{(<<()()>((){})>[{<>()}{(){}}]){(<()()>){([]{})[()]}}}[([<<>[]>{{}}])]>>(<{([[[][]]({',
    '<({{[[[[[<[(<((){})({})>)[<({}<>)(<>)>{{<>}}]]><[<{[[][]]<<>{}>}{(<>()){[]{}}}>{({()}<()[]',
    '<<{<{{[[([<{{[(){}]<()[]>}<{<><>}[[][]]>}>[[[<()[]>]<{<>()}<[]{}>>]}]{<(<<<>{}>(<>[])>[{()(',
    '({{(({<([(<{{[[][]]<{}<>>}{{[]<>}}}>[({{()<>}(<>[])}<<<>[]>>){[([]{})]<{()<>}{(){}}>}])[<[{[{}[]]}[',
    '<([<{[{(<[[[((()[])[[]()]){[[]()](()<>)}][<(<>[]){()()}>{(<><>)[<>]}]]][((({{}[]}{[]()}))<[[{}<>]<[]',
    '{[[([<[<{({{{[<>{}]{(){}}}{{[]{}}<{}<>>}}<(<()<>>{()[]})<(<>())[[]()]>>}[<[{[]<>}(()()))<<[]{}>{<',
    '{<<<(([(((<[{(()[]){()<>}}]>)([<[<<><>>((){})]>][{[[{}[]][{}<>]]<<()<>>[{}[]]>}[[<<>{}>[{}[]]]<{[]()}>]]',
    '{{[(<<<(({{<<{{}<>}[<>[]]>([[]<>]<{}{}>)>{({{}{}}{[]<>})}}}[[{<{<><>}(<>())>{[()]}}<[(<>{})',
    '((({([{[[<{{([{}][{}<>]){[[]{}]{{}<>}}}[<{<>{}}><[[]{}]<<>()>>]}([(<()[]>[<>])[[[]()](())]',
    '({{<[{{<(([<{<<>[]><{}{}>}[(<>{})<()[]>]><[[[][]](()())](<[]()>(<>[]))>]{<{<{}[]>[{}[]>}><[[[]{}]<[]{}',
    '{{<[{<[<{[{((<[]<>>{{}[]})[([]<>)(()())])}][({[({}()){{}<>}]}({<[][]><<><>>}<[()<>]<[]<>>>))(<<<<>{}><(){}>',
    '{[<[{<{((<[(<([][])[(){}]>{([]())<[][]>})<{<<><>>{<>}}>]<<[{{}()}{<><>}][[{}()]{[]<>)]>{[{[]<>}<{}{}>]((<>',
    '<(<({(([{<[((<[]{}>[()[]]){((){})[(){}]})[[<[][]>{()<>}]({{}()})]]([(<<>()>{<>})<({}{})({}<>)>]((<<',
    '<<<[<<[(<<{{(<<>()>([]()))[{(){}}{{}[]}]}{<[(){}]>{[<>[]]([]<>)}}}([<<<><>>([]<>)]]{{<()()>{{}[]}}[{<',
    '{[<(<([([[<[{{<>{}}<{}()>}{<[]<>><<>()>}][{((){})[{}<>]}<{<>()}{<>{}}>]>{{<<[][]>[<>[]]><<()<>><[]<>>>}',
    '[{({<[{{([[[{({}<>)[<>[])}[[[][]]({}())]]](<<<(){}>[<>]>({(){}})>[(({}()){{}{}})<<<>{}>{<>[]}>])])}',
    '<[[<<((((<<([<()<>>{[]()}]({{}{}}<[]()>))>>{<<<{<>{}}>{(()[]){[][]}}>(({{}{}})[[<><>]{{}{}',
    '({[({<[{{[(([{<>()}([][])](<<>{}><[]>))[{{[]<>}<<>()>><[<>()]>])]}<<{<([()<>]){{(){}}(()())}',
    '((<{{<(<{<<({(<>{})}<[{}<>]{[]<>}>){{[<>]<<><>>}{[<>()]((){})}}>({({{}()}{()()}){[<>()]<<>{}>}}(<({}<>)([]())',
    '{{[<{({{[[({<([]<>)(()<>)>([{}<>]{()()})}([{{}{}}<<>[]>]{<()[]>{()()}}))]<<[{[<>()]<{}[]]}[[[]()',
    '[((<<{(<{(([{[<>{}]({}[])}([{}[]][()<>])])[[[(<>())([]<>)]]]){<([{[]{}}[<>()]]<[<>[]][<>{}]>)(<({}{})',
    '((<([(<<([{(<<<>{}><<><>>>[{[]()}])[{[<>{}][[]{}]}]}([[{<>()}({}[])]<<{}>{(){}}>]{[<[]<>>[(){}]>})][<<((()()',
    '<[<[<{({{{{({[[][]][<>[]]}<[[][]]>)[[<[]>((){})]]}<(<([]()){[][]}>[<<><>><[]<>>]]{(<<><>>)[<()[]>',
    '{<[((<(<[({<({[]()}([]{}])<[<>{}]{{}<>}>>({<()()><<>{}>}{[<><>]<<>[]>})}{[((<>)[[]()])]})[({{[()[]]<',
    '<{({[[{<{[<{([()[]][{}{}])}>({[<()()>(<><>)]<[()<>]([][])>}([<{}<>>(<>[])]({<>[]}(<>()))))]}(([{(([])',
    '<<(([[[({(<({[{}()]<()()>}<[{}{}]<[]()>>){[(<>{})[<>[]]][(()<>)(<>())]}>(<<[()()]([]{})>[[[]{}]{(){}}]',
    '({<{<<<{<<{(<<[]{}>([]{})><{{}}[()<>]>)}[([([]{})[{}[]]]{{<><>}[()<>]})]>{{<{<<>{}>}(<[]{}>[[]])>[<<()()><()',
    '(<<{[<{<{(<{[[{}[]]<()[]>]([()][{}[]])}(({()[]})({<><>}<{}<>>))>[[[<[][]>{(){}}]][<[(){}][{}]',
    '[[{{({[<<([{{[<><>]{<>{}}}}])><[{[{[[][]]{()<>>}{({}<>){[]}}]({{<>{}}<[]()>})}<{[<()<>>]([()[]][()])}{{<[]',
    '[([({<[[[[<<<[<>][<><>]><{[][]}{<>[]}>><{[[]]<<>{}>}>>[[(({}<>){{}<>})[<()[]>[()[]]]]]>{([{{<>}<',
    '{{[<[[<<{<{({{(){}}{(){}}}({<>()}{{}{}}))((({}())({}<>))([{}()][{}<>]))}>({(({()[]}){(<><>)<{}>}](<',
    '[({[<{{([[{([{()<>}<<>{}>]{<[]{}>})}({{[<>{})<{}()>}[[[][]]<{}[]>]})]]{<{<[<{}()>]>{{{()}(<>',
    '{[(([[(([<[(({()}<()<>>)<(<>[])({}[])>)]>])({[([[({}<>){<>()}](<{}<>>)](<((){})[<>[]])))([<([]())({}<>)>{[{}',
    '{([[({[[(<<(<[<>()]{{}()}>)<<(()[])>>><(((<>{})[[][]])[[[][]]{<>[]}])({<<>{}><{}[]>}<{{}[]}>)>>[{(([{}',
    '[(([<{[<<[<{<[{}{}]{[]()}><(<>())([]{})>}{[{[]()}[{}[]]]((()<>){()()})}>{([{<>[]}([]{})]<{[][]}({}{})>){{[[]{',
    '[<{<[<[([{{{{<<><>>}((()()){[]()})}{{{{}<>}([]{})}([<><>]{()()])}}{{({<>{}}<{}{}>)[<<><>>({}())]}}}<',
    '[<[[<{[((({(([<>{}]([][])){{[]()}<[][]>})[{[()<>}<()<>>}{<{}[]>}]}(<([<>{}]([]())){({}[])[<>{',
    '[{{<{<[<{([({([]())([]{})}{<()[]>[()<>]])(([<>{}][()[]])(<{}{}><()<>>))])}>]({(<[<(([]<>)([]<>))<[()<>](()',
    '<({<(([[<<[[{[{}()][()<>]}((<>[])[[]])]]{{<{{}{}}{<><>}><(<>)([]{}))}({(<>{})(<>[])}{<{}<>>{<>()}})}>({{{<',
    '(({<[([(<<(<(<<><>>)({{}()})>{{[<>()]}}){{[[()[]]{<>{}}]({[]{}})}[([()<>]{{}()}){{[]{}}(<>[])}]}>>({(<(((',
    '<[[{([<<[[(<<([][])[<>]>[[<>[]]]>)([<(()())<()[]>><[{}][[]]>])]((<[((){})[[]()]]<({}[]>[{}[]]>>',
    '[(<<<<({<[{<<<(){}>{[]{}}>([{}{}]({}[]))><<<[]{}>(()[])>{[{}()](()<>)}>}][<<[(<>[])<(){}>]({(){}}((){',
    '<[[[[{(<{([{((<>())[()<>]){<{}[]><{}()>}}][{{{<><>}[<>{}]}({{}{}}[<>{}])}[({(){}}[{}<>]){[{}[]]}]',
    '(<<[<(<(<[[{<[<>()]<<>>>{{()<>}<[]{}>}}[(<[][]>{{}()})({()[]}(()[]))]]({((()())[{}])<<{}()){{',
    '{{<([{{[(({([([][]){(){}}]){[{[]<>}(()<>)]<[{}]<<>>>}}<({{{}()}[{}()]}{<(){}>{<>[]}})<<[{}()]<<>()>]({',
    '((<<{<{[[(<[{([]())(<><>)}](<<{}()>(()<>)>[((){})[[]{}]})>([(<[]<>><{}<>>)][<<{}()>>[({}[])([][])]]))<{((',
    '[[<{{<[{({{[(<<>[]>[<><>])<{[]<>}<(){}>>]<[[{}<>]<{}()>]<<[][]><<>()>>>}<[({[]()})<(<><>)<<>{}',
    '<(({[[[<{<[(<([][])(<>{})>{{{}}[{}()]})]((<{(){}}(<>[])>([{}[]]{<>{}})){{({})}{[{}[]]}})>}{[[(((<><>}(()()))',
    '{[[{[({{[((<(({}{})){<[][]){{}()}}>){[({{}[]}([]{}))]{[<[]{}><[]{}>]}})({[{[[]{}]{()[]}}]<(<<>>)[{{}()}<{}<>',
    '{[[<{({([(<[[{{}[]}[()[]]][[[][]]({}{})]]<[<[]<>>[{}()]]<<<>()>[()()]>>>>{[([[()()]<<>[]>]',
    '<([[[[{([<{{(<[]{}>[[]]){<[]()>{()<>}}}[<<[][]>((){})>{{()<>}[[]{}]}]}>[{{{<()()><(){}>}<{()()}>}{[(()',
    '{(<{<([<[(({{[{}[]]({}[])}{{[]()}{<><>}}})[<<({}())[()[]]>{[[][]]<()[]>}>[<<()<>>([]())><[(){})<()()>>]]',
    '{[[(<([<(((([[{}{}]{[]()}]<(<>{})<[][]>>){{<{}{}><[][]>}[{()<>}[()[]]]})<(((<>{}){[]{}})[{[]()}',
    '{{<<<{[({{{{([(){}}[<>{}])[<(){}><{}{}>]}}[<[{<>{}}{{}{}}](<[]{}>[[][]])>]}({<{{{}{}}<{}[]>}([[]][{}<>]',
    '({{{(<[{{<[[(({}{})<[]<>>)([{}[]]{()[]})]((<()()>)[<[]{}>{<>[]}])])<[{(<{}>[[][]])<([]())[[]()]>}<',
    '(((<{{{(((([({()<>})<<[]<>>[<>]>])[((<<>[]>({}))[[[]()]<<><>>])(<{[][]}[{}()]><{{}[]}[()()]>)',
    '{[<[[<{<<({(<(<>()){[]()}><([]{})[<>{}]>)[[<{}[]><[]{}>][[{}[]]<[]<>>]]})>[<{<([()<>]{{}[]})<{{}[]}<{}<>>>',
    '((({{[(((([{<(())({}<>)>{[[]{}][[][]]}}{<<{}<>>{{}[]}>{(<><>)({}<>)}}][{{[(){}](<>{})}{<()',
    '{{<{({({[[<{{(()[])<()[]>}}[[{{}<>}(()[])][{{}{}}{{}<>}]]>{((<{}[]>{[]<>})({[]<>}{[][]}))[([[]<>]<()()>)<<<',
    '[[{{{{{[[{[(<[{}()]{[]()}><<()()>[(){}]>)<[[{}<>]{<>[]}]>]([(<{}<>>[[][]]){(<><>)(()[])]]<[[',
    '{({<[<{[<[[([[<><>][<><>]])[{{{}()}([]<>)}[[[]()][[][]]]]]<[<<()[]]{<>[]}><([])<<>()>>]{(<()<>><',
    '({<<<{<<{({<{[()[]]{(){}}}{((){}){{}[]}}><<{(){}}><{<>()}<{}{}>}>}<{[[[]]([]{})](<()<>>(()<>))}>)}<<[({[<>',
    '(<<<<{[{<({{{(<><>)<()[]>}{{[]()}{()()}}}<[<[]{}>(<>[])]{[[]<>]<[]<>>}>})[((([<>]{(){}})([(){}]<<>',
    '(([(((((<<{<[<()<>><[]()>]([()[]][<>{}])>{(((){})({}[]))(<[]{}><[]<>>)}}{(<<(){}>[{}]>{{()())<()[',
    '(({<([({(<{((<()()>{()[]}){<[][]>[[]<>]})[[{[]}{<><>}]<<[]><{}()>>]}(<(<[]{}><{}{}>)[(<><>){{}()}]>)>',
    '{<<{[{[<{{{({({})<<>()>})<{[{}{}]}[[{}()]]>}}([{(({}{}}(<><>))([<>[]](<>()))}[{[{}<>]}(<<>{}>(()<>))]])}<',
    '({[[{{{{[<{[([<>[]]{{}{}}><<<>[]>>]{[{()()}[()()]]}}((<[{}()][<>{}]>{([]()){()[]}})({[()<>](()[]',
    '[[{{(({{({<{<<{}()>>{<<>()><{}()>}}{[{<>[]}<{}>]{<[]<>>[{}[]]}}>{[[[{}<>]({}{})]<[{}{}]<(){}}>][{({}',
    '([[<<(<[<{{[[{(){}}<()[]>]{{()[]}}]({{[]{}}[(){}]](({}{})[[][]]))}{<[{<>[]}{{}<>}]{(<>{}){()()}}>}}<<{<(',
    '{[<[(({[[(([[[{}()](<><>)]{{{}()}({}[])}])[<((()[])<()()>)<{<>{}}>><[{<><>}(()[])]>])](<({',
    '{[{<<[(<{({<[[()<>]<[]{}>][(<>){{}<>}]>}<(<<<>[]>(()())>[(()<>)[[]<>]])<[<<>{}>[<><>]]{[<>{}]{[]}}>>)[',
    '[{([{<([[{[([{{}<>}[{}[]]][({}{})({}{})]){({<>[]}(()()))}](<[(()[])([]{})][<()[]>{[]{}}]><{(<>())<(',
    '([{({(((((({<({}<>)<<>[]>>{[<>[]][<><>]}}(<({}())<<>[]>>(([]<>)[<>{}])))[{({{}()}(()[])){<[]()><()(',
    '{[{[{{<{<{<{(<()<>><()[]>)}<<<()[]><{}{}>>((<>[])<{}<>>)>><<(([]())[<>{}])({<>()}<{}>)>{([[]<>',
    '([[(<<({{{{{[{()<>}[{}<>]]{{{}<>}<(){}>}}(([[][]][()()]))}({[{{}()}{()<>}]}<[([]<>)(<>())][(<>[]',
    '{[<<{<<<<{<((<{}[]>[[]{}])([()<>](<>())))<{[()()]<(){}>>{<()[]>[{}{}]}>>}<[(<{{}{}}[{}{}]>)[([[]',
    '<{{[(<(<{([{({{}[]})(<{}[]>{()<>})}]<[<<[]<>>([]<>)>{<[]{}><<>[]>}][[{()<>}[[]()]][{[]<>}(())]]>)([[[<{}',
    '(<(<{<[({[<(<<{}<>>{{}()}>{(<>[])<()>})<{(<>())<{}()>}{[()()]<[]{}>}>><(({(){}}[[]{}]){{{}',
    '[<[[[([{{<{[([<>]<[]()>){<()>[{}<>]}]{({[]()}[{}{}])[({}[])({}())]}}>}(<(<[[()[]]<(){}>]<<[][]>{()()}>>)((',
    '[<<{<<([<{<(<(<>{}){()<>}>(({}{})({}{})))<<(<>[]){[][]]>{[{}{}]{()()}}>><[[[<><>]{[]{}}](<{}<',
    '<{<{(<<((<{{[<<>()>[()<>]]{{<>()}(<>{}))}}>({[{{[]{}}[[][]]}({(){}}[[]()])][[<<>[]>[{}<>]]{(<>[])[(){',
    '((({([<{[[<(({{}{}}[{}()])(([]()){{}{}})){<<[]<>>{{}()}>{{{}[]}{[]()}}}>[((<()[]>(()()))((()<>)([]{})))((',
    '<(<<([{[(<<<{[{}<>]{()()}}(<<>>)>([([]()){[]<>}][[()<>][<>()]])>{[<((){})[{}[]]>{((){})({}())}][([<>[]]{[]',
    '{[({{[<{<[<(<([]<>)(<>())>[<(){}>({}[])])>]>([<{[{[]}{{}<>}][({}<>)[[]<>]]}[{(<>[])(<><>)}({()<>>{[][]',
    '<((((<<<{<[(<[{}{}]{{}}>){({<>()}{{}{}})[[{}<>]([]())]}]([<(()[])<{}()>>][(<[]{}>(<>{}))<(()()){[](',
    '<[<<(({([[[<<<[]()>[()<>]>([<>()][()()])>[{(<>[])[<>]}{<{}()><[]{}}}]]]]([<{[<{}{}>{[]{}}]<<<><>>[()()]>}>',
    '<[<{<{<({{{<<<[]<>>>((<>[])[{}()])][{<<>()><()()>}(<[][]>)]}<(<((){}){{}{}}>)>}})><{[{[{([{}{}]<[](',
    '({<{<{{([[{[((<>[]))]}<<<({}{})>(<[]{}>({}[]))>{[(<>())([]<>)]{{<>{}}{()<>}}}>]([<({<><>}{{}<>})[[[]<>](',
    '([[[([{[(<({([()[]])[{[][]}<{}<>>]}<(({}{}){()[]}){{<>[]}{(){}}}>)[<({<><>}{[]})(<(){}>(<><>))>{<[',
    '[{{<<{<{(<<({[()()]<()[]>})[{(<>[]){()[]}}{((){})(<>[])}]>}){<[[[[<><>]<[][]>]]<([[][]](<>[]))((<>{})',
    '<[((<{<(<[<[[<{}()>[[]<>]]([<>[]]<()>)]<<[<>[]]{()()}>]>([({()}((){}))]<{({}())[[]()]}(({}<>)<[]{}>)>',
    '[{{<(<{({(<<(<()[]><{}<>>)<<<>>>><<(<>[])[{}[]]>>>({[{[]<>}]<<<>[]><{}()>>}<({{}}<()<>>)<[<>()][<><>]>>))})',
    '([({({{{{<(<{{<>()}({}<>)}({{}<>}<[]<>>)>)>}[{(<{[[]<>][[]{}]}[[()<>]{<>}])){(<(<>[]){<>[]}><<()>[<',
    '{({[{{(([[<({[{}{}]})><{<<<>[]><{}[]>><{()<>}<()()>>}(<[<>()]{()()}><[{}[]]>)>]]<[[((({}())<[]()>)<<()[]>{',
    '[(<([{{([[<({{[]()}<(){}>}{({}<>)({}[])})>[(<{[][]}>({<>()}<[]<>>))]]{<{<<{}{}>[()[]]>[{[]<>}{()[]',
    '([<((<<({([[([()()][()[]])[<<>{}>]]])}]>>)[<<(([[[(<<>()>)[{<><>}([][])]][((<><>)<[]{}>)[[()()]<{}{}',
    '[[<{[[({[{{({[<>()][{}{}]}){[<()[]>][<()[]>[[]()]]}}}[[[([{}{}]{{}<>})[[{}[]]{(){}}]]]]]}{[{[<(<',
    '[[<({[<{{<<[[({}[])][<{}<>>({}{})]]{(<<><>>{<>[]})}><<<{{}{}}{{}()}>{{<>}<<>>}]<<[()()]<[]<>>>([<>()]{[]<',
    '<{{{([{[([{{({<><>}<[]<>>)}[({[]<>}){<{}())[<>[]]}]}{<[{{}{}}[{}{}]]>[[[()()][<>[]]]<{{}<>}',
    '({[{{([<[<<{{<<>()><{}()>}}[[<<><>>(<>{})][{[]{}}]]><{(([]))<([]{})(<>[])>}(({<>{}}{()})(<{}{}]<<>>))>>]>[{',
    '<(<([{{[[([[{<[]()>[[][]]}{[{}[]]<{}{}>}]<{<<>()><{}{}>}({{}})>]<((<()<>>[{}[]])({{}}<{}()>)){([[]<>]{<',
    '(({{(((<<{<{<{{}[]}<[]()>>[<()<>><{}<>>]}>[[(([][])<[]<>>)][[<()()><[]>]{(<><>)<()()>}]]}[<[<{()<>}',
    '(({{{{(<[<{([{{}()}<<>{}>][<{}[]>])}[{{{[]<>}[[]]}[<(){}>]}(<{[]()}{(){}}>{([]{}){[][]}})]>]>)}[([{[[[<<()<>',
    '(<{<[([{[(((({()}<[]()>)>))<{<[(<>[]){<>()}][(<>())(<><>)]><[<()()>][((){})<<>()>]>}{{[({}{}'
];

let testInput =[
    '[({(<(())[]>[[{[]{<()<>>',
    '[(()[<>])]({[<{<<[]>>(',
    '{([(<{}[<>[]}>{[]{[(<()>',
    '(((({<>}<{<{<>}{[]{[]{}',
    '[[<[([]))<([[{}[[()]]]',
    '[{[{({}]{}}([{[{{{}}([]',
    '{<[[]]>}<{[{[{[]{()[[[]',
    '[<(<(<(<{}))><([]([]()',
    '<{([([[(<>()){}]>(<<{{',
    '<{([{{}}[<[[[<>{}]]]>[]]'
];

let scores1 = new Map([[')', 3], [']', 57], ['}', 1197], ['>', 25137]]);
let scores2 = new Map([['(', 1], ['[', 2], ['{', 3], ['<', 4]]);
let openers = ['(', '[', '{', '<'];

function doesCloseChunck(opening, closing) {
    if (opening === '(' && closing === ')') return true;
    if (opening === '[' && closing === ']') return true;
    if (opening === '{' && closing === '}') return true;
    if (opening === '<' && closing === '>') return true;
    return false;
}

let score1 = 0;
let score2s = [];

input.forEach((line) => {
    let stack = [];
    let lineIsInvalid = false;
    line.split('').every((character) => {
        if (openers.includes(character)) stack.push(character);
        else {
            if (doesCloseChunck(stack[stack.length-1], character)) stack.pop();
            else {
                score1 += scores1.get(character);
                lineIsInvalid = true;
                return false;
            }
        }
        return true;
    })

    if (!lineIsInvalid) {
        let score2 = 0;
        while (stack.length) {
            score2 *= 5;
            score2 += scores2.get(stack.pop());
        }
        score2s.push(score2);
    }
})
console.log(score1);

score2s.sort((a,b) => a-b);

while(score2s.length > 1) {
    score2s.shift();
    score2s.pop();
}
console.log(score2s[0]);
