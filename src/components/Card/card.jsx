import React, { useState, useRef, useEffect } from "react";
import { useTasks } from "../../context/TasksContext";
import {
  CardsWrapper,
  CardItem,
  CardContainer,
  CardGroup,
  CardTheme,
  CardBtn,
  CardTitle,
  CardContent,
  CardDate,
  SkeletonCard,
  SkeletonBox,
  SkeletonDots,
  DropdownMenu,
  DropdownItem,
} from './card.styled';

const categoryMap = {
  'webdesign': { className: '_orange', label: 'Web Design' },
  'copywriting': { className: '_purple', label: 'Copywriting' },
  'research': { className: '_green', label: 'Research' },
};

const formatDate = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};


const Card = ({ _id, title, category, date, loading, onEdit }) => {
  const { deleteTask } = useTasks();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const categoryKey = category ? category.toLowerCase() : 'default';
  const { className, label } = categoryMap[categoryKey] || { className: '_default', label: category || 'Без категории' };

  const handleDelete = async () => {
    try {
      await deleteTask(_id);
      setMenuOpen(false);
    } catch (err) {
      console.error("Ошибка при удалении задачи:", err);
    }
  };

  const handleEdit = () => {
    if (onEdit) onEdit(_id);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  if (loading || !title) {
    return (
      <SkeletonCard>
        <SkeletonBox style={{ height: '20px', width: '50%' }} />
        <SkeletonBox style={{ height: '14px', width: '80%', marginTop: '10px' }} />
        <SkeletonBox style={{ height: '64px', width: '100%', marginTop: '10px' }} />
        <SkeletonDots style={{ marginTop: '10px' }}>
          <div />
          <div />
          <div />
        </SkeletonDots>
      </SkeletonCard>
    );
  }

  return (
    <CardsWrapper>
      <CardItem>
        <CardContainer>
          <CardGroup>
            <CardTheme className={className}>
              <p>{label}</p>
            </CardTheme>
            <div style={{ position: "relative" }} ref={menuRef}>
              <CardBtn
                onClick={() => setMenuOpen(!menuOpen)}
                title="Меню задачи"
                aria-label="Меню задачи"
              >
                <div />
                <div />
                <div />
              </CardBtn>
              {menuOpen && (
                <DropdownMenu>
                  <DropdownItem onClick={handleEdit}>Редактировать</DropdownItem>
                  <DropdownItem onClick={handleDelete}>Удалить</DropdownItem>
                </DropdownMenu>
              )}
            </div>
          </CardGroup>
          <CardTitle>{title}</CardTitle>
          <CardContent>
            <CardDate>
              <img src="/images/calendar-clear-outline.svg" alt="calendar icon" />
              <p>{formatDate(date)}</p>
            </CardDate>
          </CardContent>
        </CardContainer>
      </CardItem>
    </CardsWrapper>
  );
};

export default Card;















