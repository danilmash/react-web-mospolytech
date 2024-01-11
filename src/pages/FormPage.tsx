import { Button, Card, Input } from "antd";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import styled from "styled-components";

interface IMyForm {
    name: string;
    age: string;
}

const MyCard = styled(Card)`
    max-width: 500px;
    margin: 100px auto 0;
`

function About() {
    const [tasks, setTasks] = useState<IMyForm[]>([])

    const {
                handleSubmit,
                formState: {errors},
                reset,
                control,
            } = useForm<IMyForm>({
        mode: 'onBlur'
    })
    
    const saveElement: SubmitHandler<IMyForm> = data => {
            setTasks((prev) => [...prev, data])
            reset();
        }
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
                            message: "Нужно больше символов"
                        }
                        }}
                        render={({ field }) => (
                        <Input {...field} />
                        )}
                    />
                    <p>{errors.name?.message}</p>
                    <Controller
                        name="age"
                        control={control}
                        rules={{
                        required: "Поле обязательно для заполнения",
                        minLength: {
                            value: 2,
                            message: "Нужно больше символов"
                        }
                        }}
                        render={({ field }) => (
                        <Input {...field} />
                        )}
                    />
                    <div>{errors.age?.message}</div>
                    <Button style={{marginTop: '15px'}} htmlType="submit">Сохранить</Button>
                </form>
            </MyCard>
            {
                tasks.map((task) => 
                    <p style={{maxWidth: '500px', margin:'50px auto 0'}}>
                        {task.name} - {task.age}
                    </p>
                )
            }   
        </>
    )
}


export default About
