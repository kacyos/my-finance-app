import Card from "../components/Card";
import Header from "../components/Header";
import List from "../components/List";
import ListItem from "../components/ListItem";

export default function Home() {
  return (
    <div className="">
      <Header />
      <h1>Saldo</h1>
      <div className=" grid m-auto gap-8 w-4/5 md:grid-cols-3 sm:grid-cols-1">
        <Card
          cardInfoFontColor="text-grey-900  font-semibold text-md"
          cardBorder="border-2 border-green-200"
          cardBackGround="bg-green-600 bg-arrowUp"
          cardTitle="Entradas"
          value="R$ 300,00"
        >
          <div>
            <List>
              <ListItem date="01/08/2021" value="R$200,00" />
              <ListItem date="03/09/2021" value="R$100,00" />
            </List>
          </div>
        </Card>
        <Card
          cardInfoFontColor="text-grey-900 font-semibold text-md"
          cardBorder="border-2 border-red-200"
          cardBackGround="bg-red-600 bg-arrowDown"
          cardTitle="Saídas"
          value="R$ 50,00"
        >
          <div>
            <List>
              <ListItem date="01/09/2021" value="R$50,00" />
              <ListItem date="-" value="-" />
            </List>
          </div>
        </Card>
        <Card
          cardInfoFontColor="text-grey-900 font-semibold text-md"
          cardBorder="border-2 border-blue-200"
          cardBackGround="bg-blue-600 bg-dollar"
          cardTitle="Balanço"
          value="R$ 250,00"
        ></Card>
      </div>
    </div>
  );
}
