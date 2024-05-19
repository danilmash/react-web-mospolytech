import { Button, Card, Input, Upload } from "antd";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import MyDocument from "../components/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

interface IMyForm {
  name: string;
  age: string;
  file: {
    file: File;
    fileList: Record<string, []>;
  };
}

const MyCard = styled(Card)`
  max-width: 500px;
  margin: 100px auto 0;
`;

function About() {
  const [tasks, setTasks] = useState<IMyForm[]>([]);

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    console.log(data.file);
    setTasks((prev) => [...prev, data]);
    reset();
  };
  return (
    <>
      <MyCard>
        <form onSubmit={handleSubmit(saveElement)}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 5,
                message: "Нужно больше символов",
              },
            }}
            render={({ field }) => <Input {...field} />}
          />
          <p>{errors.name?.message}</p>
          <Controller
            name="age"
            control={control}
            rules={{
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 2,
                message: "Нужно больше символов",
              },
            }}
            render={({ field }) => <Input {...field} />}
          />
          <p>{errors.age?.message}</p>
          <Controller
            name="file"
            control={control}
            render={({ field }) => {
              return (
                <Upload {...field} beforeUpload={() => false}>
                  <Button>Выбрать файл</Button>
                </Upload>
              );
            }}
          />
          <Button style={{ marginTop: "15px" }} htmlType="submit">
            Сохранить
          </Button>
        </form>
      </MyCard>
      {tasks.map((task, index) => {
        return (
          <>
            <PDFDownloadLink
              style={{ margin: "0 auto", display: "block", maxWidth: "500px" }}
              document={<MyDocument name={task.name} picture={task.file.file} />}
              fileName="file.pdf" // Или любое другое название
            >
              {({ blob, url, loading, error }) => (loading ? "Загрузка..." : "Скачать")}
            </PDFDownloadLink>
            <p key={index} style={{ maxWidth: "500px", margin: "0 auto" }}>
              {task.name} - {task.age} - {task.file.file.name}
            </p>
          </>
        );
      })}
    </>
  );
}

export default About;
