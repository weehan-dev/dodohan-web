module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      weehanId: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
      },
      gender: {
        type: DataTypes.ENUM('f', 'm'),
        allowNull: false
      },
      birth: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      kakaoId: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
      },
      height: {
        type: DataTypes.INTEGER(3),
        allowNull: false
      },
      bodyType: {
        type: DataTypes.ENUM('light', 'middle', 'heavy'),
        allowNull: false
      },
      smoking: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      major: {
        type: DataTypes.ENUM(
          '국어국문학과',
          '중어중문학과',
          '영어영문학과',
          '독어독문학과',
          '사학과',
          '철학과',
          '경제금융학과',
          '경영학부',
          '파이낸스경영학과',
          '의류학과',
          '식품영양학과',
          '실내건축디자인학과',
          '교육학과',
          '교육공학과',
          '국어교육과',
          '영어교육과',
          '수학교육과',
          '응용미술교육과',
          '성악과',
          '작곡과',
          '피아노과',
          '관현악과',
          '국악과',
          '체육학과',
          '스포스산업학과',
          '연극영화학과',
          '무용학과',
          '국제학부',
          '간호학부',
          '산업융합학부',
          '관광학부',
          '미디어커뮤니케이션학과',
          '사회학과',
          '정치외교학과',
          '의과대학',
          '수학과',
          '화학과',
          '물리학과',
          '생명과학과',
          '행정학과',
          '정책학과',
          '건축학부',
          '건축공학부',
          '건설환경공학과',
          '도시공학과',
          '자원환경공학과',
          '융합전자공학부',
          '전기생체공학부',
          '신소재공학부',
          '화학공학과',
          '생명공학과',
          '유기나노공학과',
          '에너지공학과',
          '기계공학부',
          '원자력공학과',
          '산업공학과',
          '미래자동차공학과',
          '컴퓨터소프트웨어학부',
          '정보시스템학과'
        ),
        allowNull: false
      },
      religion: {
        type: DataTypes.ENUM(
          '기독교',
          '천주교',
          '불교',
          '원불교',
          '이슬람교',
          '기타',
          '종교없음'
        ),
        allowNull: false
      },
      team: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: 'team',
          key: 'id'
        }
      },
      isActivate: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      warning: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
    },
    {
      tableName: 'user'
    }
  )
}
