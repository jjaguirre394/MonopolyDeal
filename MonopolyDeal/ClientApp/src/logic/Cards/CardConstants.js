export const ActionKinds = {
    dealBreaker: "deal_breaker",
    debtCollector: "debt_collector",
    doubleTheRent: "double_the_rent",
    forcedDeal: "forced_deal",
    hotel: "hotel",
    house: "house",
    itsMyBirthday: "its_my_birthday",
    justSayNo: "just_say_no",
    passGo: "pass_go",
    slyDeal: "sly_deal"
}

export const Colors = {
    brown: "brown",
    blue: "blue",
    green: "green",
    lightBlue: "lightBlue",
    orange: "orange",
    purple: "purple",
    black: "black",
    red: "red",
    utilities: "utilities",
    yellow: "yellow"
}

export const PropertyNames =
{
    brown: ["Baltic Avenue", "Mediteranean Avenue"],
    blue: ["Boardwalk", "Park Place"],
    green: ["North Carolina Avenue", "Pacific Avenue", "Pennsylvania Avenue"],
    lightBlue: ["Connecticut Avenue", "Oriental Avenue", "Vermont Ave"],
    orange: ["New York Avenue", "St. James Place", "Tenesse Avenue"],
    purple: ["St. Charles Place", "Virginia Avenue", "States Avenue"],
    black: ["Short line", "B. & O. Railroad", "Reading Railroad", "Pennsylvania Railroad"],
    red: ["Kentucky Avenue", "Indiana Avenue", "Illinois Avenue"],
    utilities: ["Water Works", "Electric Company"],
    yellow: ["Venthor Avenue", "Marvin Gardens", "Atlantic Avenue"]
}

export const Rent = {
    brown: [1, 2],
    blue: [3, 8],
    green: [2, 4, 7],
    lightBlue: [1, 2, 3],
    orange: [1, 3, 5],
    purple: [1, 2, 4],
    black: [1, 2, 3, 4],
    red: [2, 3, 6],
    utilities: [1, 2],
    yellow: [2, 4, 6]
}

export const CombinationKinds = {
    blueGreen: "blueGreen",
    lightBlueBrown: "lightBlueBrown",
    orangePurple: "orangePurple",
    greenBlack: "greenBlack",
    lightBlueBlack: "lightBlueBlack",
    utilitiesBlack: "utilitiesBlack",
    yellowRed: "yellowRed",
    all: "all"
}

export const CombinationColors = {
    blueGreen: [Colors.blue, Colors.green],
    lightBlueBrown: [Colors.lightBlue, Colors.brown],
    orangePurple: [Colors.orange, Colors.purple],
    utilitiesBlack: [Colors.utilities, Colors.green],
    yellowRed: [Colors.yellow, Colors.red]
}

export const CardTypes = {
    ActionCard: "ActionCard",
    MoneyCard: "MoneyCard",
    PropertyCard: "PropertyCard",
    RentCard: "RentCard",
    WildCard: "WildCard"
}