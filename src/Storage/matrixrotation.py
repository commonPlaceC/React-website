def rotate_matrix90(m):  # функция поворота на 90 градусов по часовой стрелке
    # return [[m[i][j] for i in range(len(m[0])-1, -1, -1)] for j in range(len(m))]
    return list(list(m_elem)[::-1] for m_elem in zip(*m))


# создание матрицы
matrix = []
strings_amount, columns_amount = map(int, input("Введите количестов строк и столбцов через пробел: \n").split())
# проверка введенных значений
if strings_amount <= 1 or columns_amount <= 1:
    print("Размеры не соответсвуют требованиям матрицы.")
    exit(0)
# ввод значений матрицы
for i in range(strings_amount):
    current_string = [int(s) for s in
                      input(f"Введите {columns_amount} значения(ий) для {i + 1} строки через пробел:\n").split()]
    # проверка значений
    if len(current_string) == columns_amount:
        matrix.append(current_string)
    else:
        print("Введено неверное количество значений.")
        exit(0)

# вывод текущей матрицы
print(f"Текущая матрица {strings_amount} на {columns_amount}:")
for elem in matrix:
    print(*elem)
# выбор угла поворота
rotation_choice = int(input('Напишите 1/2/3 для поворота на 90°/180°/270° по часовой стрелке соответственно:\n'))
# поворот матрицы
if rotation_choice == 1:
    matrix = rotate_matrix90(matrix)
elif rotation_choice == 2:
    matrix = rotate_matrix90(rotate_matrix90(matrix))
elif rotation_choice == 3:
    matrix = rotate_matrix90(rotate_matrix90(rotate_matrix90(matrix)))
# вывод измененной матрицы
print('――――――――――――――', '\n' + f'Матрица повернута на {rotation_choice * 90}° по часовой стрелке:')
for elem in matrix:
    print(*elem)
