const WeightMonthModel = require('./weight-month-models');

const data = [];

const save = async (weightMonth) => {
const result = WeightMonthModel.create(weightMonth);
return result;
};

const findAll = () => {
    console.log('entrei aqui');
   const result = WeightMonthModel.findAll();
    return result;
}

const findById = (id) => {
    const result = WeightMonthModel.findByPk(id);
    return result;
}

const update = async (id, newData) => {
    try {
      // Encontre o registro que deseja atualizar
      const record = await WeightMonthModel.findByPk(id);
  
      if (!record) {
        throw new Error('Registro não encontrado');
      }
  
      // Atualize os campos necessários com os novos dados
      await record.update(newData);
  
      console.log('Registro atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar registro:', error);
    }
  };
const deleteWeightMonth = async (id) => {
  try {
    // Encontre o registro que deseja excluir
    const record = await WeightMonthModel.findByPk(id);

    if (!record) {
      throw new Error('Registro não encontrado');
    }

    // Exclua o registro
    await record.destroy();

    console.log('Registro excluído com sucesso!');
  } catch (error) {
    console.error('Erro ao excluir registro:', error);
  }
}





module.exports = {save, findAll, findById, update, deleteWeightMonth};