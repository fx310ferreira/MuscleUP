import { Text, Pressable, View } from "react-native";
import { useEffect, useState } from "react";

import Button from "../Button";
import TitleSub from "../TitleSub";
import Graph from "../Graph";

import { styles } from "./styles";

export default function Statistics() {
  const today = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(today[0]);
  const [days, setDays] = useState<{ [key: number]: Date }>({ 0: today[0], 1: today[0], 2: today[0], 3: today[0], 4: today[0], 5: today[0], 6: today[0] });

  useEffect(() => {
    // 3 days before selected_dat 3 days after
    const newDays = { ...days };
    for (let i = -3; i < 4; i++) {
      const date = new Date(selectedDate);
      date.setDate(date.getDate() + i);
      newDays[i + 3] = date;
    }

    setDays(newDays);

    // TODO ask for data for selectedDate
  }, [selectedDate])

  return (
    <View style={styles.container}>
      {/* carrosel with all days, show 7 in 7 */}
      <View style={styles.carousel}>
        {Object.values(days).map((day, index) => (<>{
          selectedDate.getDate() === day.getDate() ?
            <Button key={`${day.getDate()}-${index}`} variant='secundary' onPress={() => {}}>
              {
                (selectedDate.getDate() === today[0].getDate() && index === 3 ? 'Today, ' : (day.toLocaleDateString('en-GB', { weekday: 'short' }) + ', ')) +
                day.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
              }
            </Button>
            :
            <Pressable key={`${day.getDate()}-${index}`} onPress={() => {
              if (day.getDate() > today[0].getDate()) return;
              setSelectedDate(day)
            }}>
              <Text style={styles.carousel__day}>
                {day.getDate()}
              </Text>
            </Pressable>
        }</>))}
      </View>
      <View style={styles.stats}>
        <View style={styles.stats__header}>
          <Text style={styles.stats__header__value}>1 883 Kcal</Text>
          <Text style={styles.stats__header__desc}>Total calories</Text>
        </View>
        <View style={styles.stats__body}>
          <TitleSub title='7580 m' subTitle='Distance' />
          <TitleSub title='9832' subTitle='Steps' />
          <TitleSub title='1248' subTitle='Points' />
        </View>
      </View>
      <Graph vals={[55, 20, 80, 45, 75, 90, 50]} />
    </View>
  );
}