import { View, Text } from 'react-native'
import React from 'react'
import COLORS from "../Constants/colors";

import { TouchableOpacity } from "react-native";
import { useState } from 'react';

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';

import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

import { StyleSheet } from 'react-native';

export default function FavoriteTest() {
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
        // add items here from database
      ];
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const renderLabel = () => {
        if (value || isFocus) {
          return (

            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              Week 1 Grocery List
            </Text>
          );
        }
        return null;
      };


  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "flex-start",
          padding: 30,
          
        }}
      >
        <View style={{ marginTop: 30,  }}>
          <TouchableOpacity style={{flexDirection: "row" }}
          //    onPress={() => navigation.navigate("")}
          >
            <Ionicons name="chevron-back-outline" size={40} color={COLORS.black} />
            <Text style={{ fontSize: 30, color: "black", marginHorizontal:160  }}>My Favorite</Text>
          </TouchableOpacity>
          
          
        </View>
    </View>
    {/* extension */}
    <View >
         
        
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Week 1 ' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
          
        />

        
        
        
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'white',
      padding: 16,
      
    },
    dropdown: {
      height: 100,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,

    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 25,
    },
    placeholderStyle: {
      fontSize: 25,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });