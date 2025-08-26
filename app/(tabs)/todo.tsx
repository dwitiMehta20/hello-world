import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { Trash, Check } from 'lucide-react-native';

type Todo = {
  text: string;
  completed: boolean;
};

function TodoApp() {
  const [newtodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  function Addtodo() {
    if (newtodo.trim() === "") return;
    setTodo([...todo, { text: newtodo, completed: false }]);
    alert("New Todo Added");
    setNewTodo("");
  }

  function deleteTodo(index: number) {
    const newTodos = todo.filter((_, i) => i !== index);
    setTodo(newTodos);
  }

  function toggleCompleted(index: number) {
    const newTodos = [...todo];
    newTodos[index].completed = !newTodos[index].completed;
    setTodo(newTodos);
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ color: "wheat", fontSize: 22, margin: 15 }}>TODO APP</Text>

      {/* Input Row */}
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder='What You wanna Do Today ?'
          placeholderTextColor="gray"
          style={{
            color: "wheat",
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "wheat",
            padding: 15,
            margin: 20,
            fontSize: 20,
            flex: 1
          }}
          value={newtodo}
          onChangeText={setNewTodo}
        />
        <Pressable
          style={{
            backgroundColor: "#02a189",
            width: 100,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderRadius: 10
          }}
          onPress={Addtodo}
        >
          <Text style={{ color: "white" }}>Add Todo</Text>
        </Pressable>
      </View>

      {/* Todo List */}
      <View>
        {todo.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              marginLeft: 20
            }}
          >
            {/* Check Button */}
            <Pressable onPress={() => toggleCompleted(index)}>
              <Check color={item.completed ? "#17e693" : "gray"} />
            </Pressable>

            {/* Todo Text */}
            <Text
              style={{
                color: "white",
                fontSize: 22,
                marginLeft: 10,
                textDecorationLine: item.completed ? "line-through" : "none"
              }}
            >
              {item.text}
            </Text>

            {/* Trash Button */}
            <Pressable onPress={() => deleteTodo(index)} style={{ marginLeft: 20 }}>
              <Trash color={"#e6173d"} />
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  )
}

export default TodoApp;
